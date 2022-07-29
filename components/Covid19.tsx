import React from 'react';
import Image from "next/image"

import icon5 from '../assets/images/covid_icons/covid-5.svg'
import icon7 from '../assets/images/covid_icons/covid-7.svg'
import icon22 from '../assets/images/covid_icons/covid-22.svg'
import icon23 from '../assets/images/covid_icons/covid-23.svg'
import icon9 from '../assets/images/covid_icons/covid-9.svg'

const Covid19: React.FC<{}> = ({ }) => {
    return (
        <>
            <section className="bg-box-600 text-gray-100 py-16 space-y-12">
                <div className="container mx-auto text-center">
                    {/* <h2 className="text-5xl font-bold">Mesures Barrières - Covid19</h2> */}
                    {/* <p className="text-gray-400">Libero minima optio qui</p> */}
                </div>
                <div className="container mx-auto lg:px-16">
                    <div className="flex flex-col md:flex-row items-center md:items-center lg:items-start">
                        <div className="flex flex-col w-2/3 p-2 py-8 md:pl-8 md:pt-0 ">
                            <div className="grid grid-cols-2 gap-4 text-gray-400">
                                <div className="p-6 flex flex-col justify-center items-center">
                                    <Image width={128} height={128} src={icon7} alt='covid prevention' />
                                    {/* <p className='text-base text-gray-500'>Mesure</p> */}
                                </div>
                                <div className="p-6 flex flex-col justify-center items-center">
                                    <Image width={128} height={128} src={icon22} alt='covid prevention' />
                                    {/* <p className='text-base text-gray-500'>Mesure</p> */}
                                </div>
                                <div className="p-6 flex flex-col justify-center items-center">
                                    <Image width={128} height={128} src={icon23} alt='covid prevention' />
                                    {/* <p className='text-base text-gray-500'>Mesure</p> */}
                                </div>
                                <div className="p-6 flex flex-col justify-center items-center">
                                    <Image width={128} height={128} src={icon9} alt='covid prevention' />
                                    {/* <p className='text-base text-gray-500'>Mesure</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center self-stretch w-full md:w-1/3 md:px-0">
                            <div className="p-6 flex flex-col justify-center items-center">
                                <Image width={360} height={360} src={icon5} alt='covid prevention' />
                                {/* <p className='text-base text-gray-500'>Mesure</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Covid19