import Link from "next/link";

type Price = {
    name: string
    desc: string
    price: string | number
    isMostPop: boolean
    features: string[]
}

type Props = {
    plans: Price[]
    isPercent: boolean
    per: string
    pricingTitle: string
    pricingDescription: string
}



export default ({plans, isPercent, per, pricingTitle, pricingDescription}:Props ) => {

    

    return (
        <section className='relative py-14'>
            <div className="absolute top-0 w-full h-[521px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
            <div className="max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
                <div className='relative max-w-5xl mx-auto space-y-3 px-4 sm:text-center sm:px-0'>
                    <h3 className="text-indigo-600 font-semibold">
                        Pricing
                    </h3>
                    <p className='text-gray-800 text-3xl font-extrabold md:text-4xl lg:text-6xl'>
                    {pricingTitle}
                    </p>
                    <div className='max-w-5xl text-center'>
                        <p>
                       {pricingDescription}
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center sm:flex'>
                    {
                        plans.map((item:Price, idx:number) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col mt-6 sm:mt-0 sm:rounded-xl sm:max-w-md ${item.isMostPop ? "bg-white shadow-lg sm:border" : ""}`}>
                                <div className="p-4 py-8 space-y-4 border-b md:p-8">
                                    <span className='text-indigo-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-800 text-3xl font-semibold'>
                                        {item.price}{typeof item.price === 'number' && (isPercent ? '%' : 'Rs')} <span className="text-xl text-gray-600 font-normal">{typeof item.price === 'number' && '/'+per}</span>
                                    </div>
                                    <p className="mb-5 h-12">
                                        {item.desc}
                                    </p>
                                    <Link href={'/contact'} className='px-3 py-3  rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                        Contact Us
                                    </Link>
                                </div>
                                <ul className='p-4 py-8 space-y-3 md:p-8'>
                                    <li className="pb-2 text-gray-800 font-medium ">
                                        <p>Features</p>
                                    </li>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-indigo-600'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fillRule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clipRule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
