import React from 'react'

type Props = {}

const Analytics = (props: Props) => {
  return (
    <section className="relative overflow-hidden  w-full bg-purple-50">
        <div className=" px-4 mx-auto mt-12">
            <div className="flex max-md:flex-wrap justify-around  items-center -mx-4 ">
                
                <div className="lg:w-1/2 w-full px-4 ">
                    <div className=" ">
                        <h1 className="mb-6 text-4xl font-bold  lg:text-6xl">
                            <span>Total <span className='text-purple-600'>Transaction Insight</span>: Effortless Tracking</span>
                            
                        </h1>
                        <p className="mb-6 leading-8 text-gray-900 ">
                        Experience unparalleled visibility into your transactions with our comprehensive platform. Gain a bird's-eye view of your financial activities through dynamic visualizations like pie charts, line charts, graphs, and more. Uncover valuable insights effortlessly and make informed decisions with ease.
                        </p>
                        <a className="inline-block w-full px-6 py-4 mb-2 text-lg font-medium leading-6 text-center text-white transition duration-200 bg-purple-600 rounded shadow  md:w-auto md:mb-0 md:mr-4 hover:bg-purple-800"
                            href="#">
                            Download Now
                        </a>
                    </div>
                </div>
                <div className="w-full px-4 mt-20 lg:w-2/5 lg:mt-0">
                    <div className="flex justify-center lg:justify-end">
                        <div className="mr-4 lg:mr-8">
                            <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                src="https://i.postimg.cc/PqrSRxDN/pexels-fauxels-3184357.jpg " alt=""/>
                            <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                src="https://i.postimg.cc/90fhB5Hb/pexels-pixabay-38271.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                src="https://i.postimg.cc/qM9PNCqj/pexels-vlada-karpovich-4050291.jpg" alt=""/>
                            <img className="block object-cover w-full h-32 mx-auto mb-8 rounded-md sm:h-64"
                                src="https://i.postimg.cc/qRMYPsDM/pexels-christina-morillo-1181605.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </section>
  )
}

export default Analytics