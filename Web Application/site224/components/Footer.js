function Footer() {
    return (
        <>
            <section className="box-border pt-5 leading-7 text-gray-900 bg-gray-100 border-0 border-gray-200 border-solid pb-7">
                <div className="box-border px-4 mx-auto border-solid md:px-6 lg:px-8 max-w-7xl">
                    <div className="relative flex flex-col items-start justify-between leading-7 text-gray-900 border-0 border-gray-200 md:flex-row md:items-center">
                        <a href="https://fabudable.com/en" rel="noreferrer" target="_blank" className="left-0 flex items-center justify-center order-first w-full mb-4 font-medium text-gray-900 md:justify-start md:absolute md:w-64 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
                            <span className="text-xl font-black leading-none text-gray-900 select-none logo">Fabudable<span className="text-indigo-600">.</span></span>
                        </a>
                        <ul className="box-border flex mx-auto my-6 space-x-6">
                            <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
                                <a href="/license" className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-indigo-600 focus-within:text-blue-700 sm:px-0 sm:text-left">License</a>
                            </li>
                        </ul>
                        <div className="box-border right-0 flex justify-center w-full mt-4 space-x-3 border-solid md:w-auto md:justify-end md:absolute md:mt-0">
                            
                            <a href="https://github.com/inimaga/Site224" target="_blank" rel="noreferrer" className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer hover:text-indigo-600 focus-within:text-blue-700">
                                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"></path><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 mt-4 leading-7 text-center text-gray-600 border-t border-gray-200 md:mt-5 md:pt-5">
                        <p className="box-border mt-0 text-sm border-0 border-solid">
                            Built with ❤️ by <a href="https://issanimaga.com" rel="noreferrer" target="_blank" class="hover:text-indigo-600 underline">Issa Nimaga</a> | © 2022
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;