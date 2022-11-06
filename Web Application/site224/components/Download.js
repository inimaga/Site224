import Image from "next/image";
import { CSVLink } from "react-csv";

function DownloadComponent( {locationsData} ) {
    return (
        <section className="flex items-center justify-center py-0 bg-white bg-gradient-to-br from-indigo-600 via-indigo-500 to-teal-400 min-w-screen">
            <div className="relative flex flex-col items-center w-full max-w-6xl px-4 py-8 mx-auto text-center lg:text-left lg:block sm:px-6 md:pb-0 md:pt-12 lg:px-12 lg:py-12">
                <h2 className="my-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:my-0 xl:text-4xl sm:leading-tight">
                    Export results to a .CSV file
                </h2>
                <p className="mt-1 mb-10 text-sm font-medium text-indigo-200 uppercase xl:text-base xl:tracking-wider lg:mb-0">
                    Flexible & Accessible
                </p>
                <div className="flex mb-8 lg:mt-6 lg:mb-0">
                    <div className="inline-flex">
                        <div className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300">
                            <CSVLink data={locationsData} filename={"GN Location Data (Generated by Site224.com).csv"}>Download Data</CSVLink>
                        </div>
                    </div>
                </div>
                <div className="bottom-0 right-0 mb-0 mr-3 lg:absolute lg:-mb-12">
                    <img src="/assets/imgs/CTA.png" alt="Call to action Image for data download" className="max-w-xs mb-4 opacity-75 md:max-w-2xl lg:max-w-lg xl:mb-0 xl:max-w-md" />
                </div>
            </div>
        </section>
    );
}

export default DownloadComponent;


