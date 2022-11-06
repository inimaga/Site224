import Image from "next/image";
import dynamic from "next/dynamic";
import useSWR from "swr";
import { useState } from "react";
import { useRouter } from 'next/router';
import NoResults from "../components/NoResults";
import DownloadComponent from "../components/Download";
import Link from "next/link";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const fetcher = (...args) => fetch(...args).then(res => res.json());

function LocationsListing() {

  const router = useRouter();
  const query = router.query;
  const category = query.category ? query.category : '';
  const city = query.city ? query.city : '';

  const [pageIndex, setPageIndex] = useState(0);
  const { data: locationsData, error: error1 } = useSWR(`http://localhost:8080/locations?parentCategory=${category}&city=${city}&page=${pageIndex}`, fetcher);
  const { data: numOfPages, error: error2 } = useSWR(`http://localhost:8080/NumberOfLocations?parentCategory=${category}&city=${city}`, fetcher);

  const totalPages = numOfPages ? Math.ceil(numOfPages / 5) : 0;

  var previousPageButtonStatus = pageIndex > 0 ? "enabled" : "disabled";
  var nextPageButtonStatus = pageIndex < totalPages - 1 ? "enabled" : "disabled";

  if (error1) return <div>Failed to load</div>;
  if (!locationsData) return <div>Loading...</div>;

  if (totalPages === 0) {
    return (
      <NoResults />
    );
  }

  return (
    <>
      <section className="relative" style={{ backgroundImage: `url('/assets/imgs/GN_Header_Image.jpg')`, backgroundSize: "cover" }}>

        <div class="relative z-50 w-full h-24  bg-transparent">
          <div class="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
            <div class="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
              <Link href="/" class="relative z-40 inline-block w-auto h-full px-5 py-3 text-normal font-bold leading-none text-white transition duration-300 bg-indigo-600 rounded shadow-md fold-bold sm:w-full lg:shadow-none hover:shadow-xl">🏠 Home</Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black to-[indigo] opacity-60"></div>

        <div className="relative z-20 px-4 py-16 mx-auto text-center text-white max-w-7xl lg:py-16">
          <div className="flex flex-wrap text-white">
            <div className="relative w-full px-4 mx-auto text-center xl:flex-grow-0 xl:flex-shrink-0">

              <h1 className="mt-0 mb-2 text-4xl font-bold text-white sm:text-5xl lg:text-7xl">GN Locations Directory</h1>
              <p className="mt-0 mb-4 text-base text-white sm:text-lg lg:text-xl">
                Find and export information on the locations of Banks, Hospitals, Schools, and more in Guinea.
              </p>

            </div>
          </div>
        </div>

      </section>

      <section className="flex flex-col w-ful xl:flex-row">
        <div className="w-full xl:w-1/2 ">

          {locationsData.map((item, index) => (
            <div key={item.name} className="px-0 py-4 mb-6 mx-10 my-10 lg:pl-8 lg:pr-4 bg-white border border-gray-200 rounded-lg hover:shadow ease">
              <div className="flex flex-col justify-between lg:flex-row">

                <div className="w-full px-4 mb-4 lg:w-7/12 xl:w-8/12 lg:mb-0">
                  <h3 className="text-xl font-bold text-gray-700 text-center">{item.name}</h3>

                  <ul className="flex flex-wrap text-base text-left lg:text-lg mt-6">
                    <li className="flex items-center w-full mb-4 sm:w-1/2">

                      <Image className="mr-2" src="/assets/imgs/Category.svg" width={20} height={20} alt="Category" />
                      <p className="font-normal">{item.parentCategory}</p>
                    </li>
                    <li className="flex items-center w-full mb-4 sm:w-1/2">
                      <Image className="mr-2" src="/assets/imgs/Type.svg" width={20} height={20} alt="Type" />
                      <p className="font-normal">{item.category}</p>
                    </li>
                    <li className="flex items-center w-full mb-4 sm:w-1/2">
                      <Image className="mr-2" src="/assets/imgs/location.svg" width={20} height={20} alt="Location" />
                      <p className="font-normal">{item.city}</p>
                    </li>
                    <li className="flex items-center w-full mb-4 sm:w-1/2">
                      <p className="font-normal text-gray-600">Verified? : {item.verified ? "True" : "False"} </p>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-4 lg:w-5/12 2xl:w-4/12">
                  <div className="h-full p-12 text-center bg-[grey] rounded-xl" style={{ backgroundImage: `url('/assets/imgs/Placeholder2.png')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  </div>
                </div>
              </div>
            </div>

          ))}

          <section>
            <h2 className="text-center">- Page {pageIndex + 1} of {totalPages} -</h2>

            <nav role="navigation">
              <ul className="cd-pagination">
                <li className={`button ${previousPageButtonStatus}`} onClick={function () { if (pageIndex > 0) setPageIndex(pageIndex - 1) }}>Prev</li>
                <li className={`button ${nextPageButtonStatus}`} onClick={function () { if (pageIndex < totalPages - 1) setPageIndex(pageIndex + 1) }}>Next</li>
              </ul>
            </nav>
          </section>
        </div>

        <div className="w-full xl:w-1/2 bg-slate-300">
          <Map locations={locationsData} />
        </div>
      </section>

      <DownloadComponent locationsData={locationsData} />
    </>
  )
}

export default LocationsListing