import Image from "next/image";

function CategorySection() {
    return (
        <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl px-10 mx-auto sm:text-center">
                <p className="text-blue-500 font-medium uppercase">Export Data to CSV</p>
                <h2 className="font-bold text-3xl sm:text-4xl mt-3">Browse by Parent Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 my-12 sm:my-16">
                    <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                        
                        <Image src="/assets/imgs/Admin.svg" width={64} height={64} alt="Administration" />
                        <p className="font-bold mt-4 text-center">Administration</p>
                    </div>
                    <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">             
                        <Image src="/assets/imgs/Education.svg" width={64} height={64} alt="Education" />
                        <p className="font-bold mt-4 text-center">Education</p>
                    </div>
                    <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">             
                        <Image src="/assets/imgs/Emergency.svg" width={64} height={64} alt="Emergency" />
                        <p className="font-bold mt-4 text-center">Emergency Services</p>
                    </div>
                    <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">             
                        <Image src="/assets/imgs/Religion.svg" width={64} height={64} alt="Religion" />
                        <p className="font-bold mt-4 text-center">Faith and Religion</p>
                    </div>
                    <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                                     
                    <Image src="/assets/imgs/Finance.svg" width={64} height={64} alt="Finance" />
                        <p className="font-bold mt-4 text-center">Financial Services</p>
                    </div>
                    <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">

                        <Image src="/assets/imgs/Health.svg" width={64} height={64} alt="Healthcare" />
                        <p className="font-bold mt-4 text-center">Health</p>
                    </div>
                    <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                                  
                        <Image src="/assets/imgs/Sport.svg" width={64} height={64} alt="Entertainment" />
                       <p className="font-bold mt-4 text-center">Media, Sport & Entertainement</p>
                    </div>

                    <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                    <Image src="/assets/imgs/Retail.svg" width={64} height={64} alt="Retail" />
                        <p className="font-bold mt-4 text-center">Retail</p>
                    </div>
                    <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">         
                    <Image src="/assets/imgs/Travel.svg" width={64} height={64} alt="Travel" />
                        <p className="font-bold mt-4 text-center">Travel, Transport and Tourism</p>
                    </div>

                    <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                    <Image src="/assets/imgs/Other.svg" width={64} height={64} alt="Others" />
                        <p className="font-bold mt-4 text-center">Others</p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default CategorySection;