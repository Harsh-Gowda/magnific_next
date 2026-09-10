import Image from 'next/image';
import Link from 'next/link';


type Location = {
    id: number;
    name: string;
    address: string;
    longitude: number;
    latitude: number;
    phone: string;
    email: string;
    image: {
        url: string;
        alt: string;
    };
    direction: string;
}

type LocationProps = {
    locations: Location[];
};

export default function Location({ locations }: LocationProps) {

    return (
        <main>


            <div className='flex flx-col gap-10 overflow-x-auto'>
                {
                    locations.map((location) => (
                        <div key={location.id} className='min-w-[200px] text-black p-5 bg-amber-100'>
                            <h1>{location.name}</h1>

                        </div>
                    ))
                }

            </div>


            <div>
                {
                    locations.map((location) => (
                        <div key={location.id} className=' '>

                            <div className='flex flex-col'>
                                <div className='flex flex-row'>
                                    <h1 className='text-white'>{location.name}</h1>
                                </div>
                                <h1>{location.address}</h1>
                                <h1>{location.phone}</h1>
                                <h1>{location.email}</h1>
                            </div>


                        </div>
                    ))
                }
            </div>
        </main>
    )

}

