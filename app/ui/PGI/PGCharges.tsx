export default () => {

    const plans = [
        {
            name: "Enterprise",
            desc: "Diverse payment options at your fingertips",
            price: "Contact Us",
            isMostPop: true,
            features: [
                "Amex (American Express)",
                "Diners Club",
                "Wallets",
                "Cash Cards",
                "EMI on Cards: 12+ Leading Banks",
                "Flexmoney",
                "Cardless EMI",
                "No Cost EMI",
                "HDFC Paylater"
            ],
        },
        {
            name: "Startup",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 1.90,
            isMostPop: false,
            features: [
                "Domestic Credit Cards: Visa, MasterCard",
                "Domestic Debit Cards: Visa, MasterCard, RuPay, Maestro",
                "Net Banking: 50+ Banks Supported",
                "UPI: 100+ Banks Supported",
                "UPI QR/Bharat QR Code: Convenient and Secure Options",
            ],
        },
    ];

    return (
        <section className='relative py-14'>
            <div className="absolute top-0 w-full h-[521px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
            <div className="max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
                <div className='relative max-w-5xl mx-auto space-y-3 px-4 sm:text-center sm:px-0'>
                    <h3 className="text-indigo-600 font-semibold">
                        Pricing
                    </h3>
                    <p className='text-gray-800 text-3xl font-extrabold md:text-4xl lg:text-6xl'>
                    Bucksbox Payment Gateway - Pricing
                    </p>
                    <div className='max-w-5xl text-center'>
                        <p>
                        Choose simple and transparent pricing that suits your business.
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center sm:flex'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col mt-6 sm:mt-0 sm:rounded-xl sm:max-w-md ${item.isMostPop ? "bg-white shadow-lg sm:border" : ""}`}>
                                <div className="p-4 py-8 space-y-4 border-b md:p-8">
                                    <span className='text-indigo-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-800 text-3xl font-semibold'>
                                        {item.price}{typeof item.price === 'number' && '%'} <span className="text-xl text-gray-600 font-normal">{typeof item.price === 'number' && "/transaction"}</span>
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                        Contact Us
                                    </button>
                                </div>
                                <ul className='p-4 py-8 space-y-3 md:p-8'>
                                    <li className="pb-2 text-gray-800 font-medium">
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
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
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
