# Product Route Guide for Your WooCommerce + Next.js Project

This guide explains the exact folder structure you need for a product list page and a single product detail page.

## 1) Understand the page difference

In Next.js App Router:

- app/page.tsx = home page ( / )
- app/products/page.tsx = products listing page ( /products )
- app/products/[slug]/page.tsx = single product detail page ( /products/wood-chair )

The important part is this:

- `/products` is a normal page
- `/products/anything` is a dynamic page
- `[slug]` means "this folder will receive a value from the URL"

---

## 2) What you should create

Your structure should look like this:

```text
app/
  products/
    page.tsx          // list all products
    [slug]/
      page.tsx        // single product detail
```

This is the key to making your slider links work.

---

## 3) Why your current slider is not working

In your slider component, you are linking like this:

```tsx
<Link href={`/products/${product.slug}`}>
```

So when the product slug is `wood-chair`, the URL becomes:

```text
/products/wood-chair
```

But your project only has:

- [app/products/page.tsx](app/products/page.tsx)

It does not have:

- app/products/[slug]/page.tsx

So Next.js has no page for `/products/wood-chair`.

---

## 4) The correct meaning of slug

If a product has slug `wood-chair`, then the URL is:

```text
/products/wood-chair
```

Inside the dynamic page, you can read it like this:

```tsx
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <h1>{slug}</h1>;
}
```

This `slug` is the part after `/products/`.

---

## 5) What each page should do

### app/products/page.tsx
This page should:

- fetch all products
- show a product grid
- link each product to `/products/${product.slug}`

### app/products/[slug]/page.tsx
This page should:

- receive the slug from the URL
- fetch the product by that slug
- show product title, image, price, description, etc.

---

## 6) The biggest mistake in your current code

This is wrong:

```tsx
`http://magnificnext.local/wp-json/wc/store/products?${slug}`
```

This is not the correct query format.

Prefer:

```tsx
`http://magnificnext.local/wp-json/wc/store/products?slug=${slug}`
```

That tells WooCommerce: "give me the product whose slug is this value."

---

## 7) Recommended structure for a clean project

```text
app/
  products/
    page.tsx
    [slug]/
      page.tsx
  components/
    products/
      ProductCard.tsx
      ProductGrid.tsx
```

This keeps your code clean:

- one page for list
- one page for detail
- one component for cards
- one component for slider

---

## 8) Simple rule to remember

If you click a product and the URL looks like:

```text
/products/some-product
```

Then you need a file like:

```text
app/products/[slug]/page.tsx
```

If you only have `app/products/page.tsx`, the link will not work.

---

## 9) Good next step for you

Start by creating only this folder:

```text
app/products/[slug]/page.tsx
```

Then inside it, test with a simple output:

```tsx
<h1>Product slug: {slug}</h1>
```

When that works, add the WooCommerce fetch.

This is the easiest way to learn the flow without confusion.

---

## 10) Final advice

Do not put the single-product details inside the same file as the product list.

Keep them separate:

- list page = `/products`
- detail page = `/products/[slug]`

That is the standard pattern in Next.js and it matches your WooCommerce product slugs perfectly.
