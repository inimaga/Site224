import Image from "next/image";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8080/locations/conakry");
  const data = await res.json();

  return {
    props: { locations: data },
  };
};

function LocationsListing( { locations } ) {

  return (
    <>
      <section className="relative" style={{ backgroundImage: `url('/assets/imgs/GN_Header_Image.jpg')`, backgroundSize: "cover" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[indigo] opacity-60"></div>

        <div className="relative z-20 px-4 py-24 mx-auto text-center text-white max-w-7xl lg:py-32">
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

          {locations.map((item, index) => (
            <div key={item.name} className="px-6 py-6 mb-6 mx-10 my-10 lg:pl-12 lg:pr-6 bg-white border border-gray-200 rounded-lg hover:shadow ease">
              <div className="flex flex-col justify-between lg:flex-row">

                <div className="w-full px-4 mb-4 lg:w-7/12 xl:w-8/12 lg:mb-0">
                  <h3 className="text-xl font-bold text-gray-700 text-center">{item.name}</h3>

                  <ul className="flex flex-wrap text-base text-left lg:text-lg mt-6">
                    <li className="flex items-center w-full mb-4 sm:w-1/2">

                      <Image className="mr-2" src="/assets/imgs/Category.svg" width={30} height={30} alt="Category" />
                      <p className="font-normal">{item.parentCategory}</p>
                    </li>
                    <li className="flex items-center w-full mb-4 sm:w-1/2">
                      <Image className="mr-2" src="/assets/imgs/Type.svg" width={30} height={30} alt="Type" />
                      <p className="font-normal">{item.category}</p>
                    </li>
                    <li className="flex items-center w-full mb-4 sm:w-1/2">
                      <Image className="mr-2" src="/assets/imgs/location.svg" width={30} height={30} alt="Location" />
                      <p className="font-normal">{item.city}</p>
                    </li>
                    <li className="flex items-center w-full mb-4 sm:w-1/2">
                      <p className="font-normal text-gray-600">Location verified? : {item.verified ? "True" : "False"} </p>
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
        </div>

        <div className="w-full xl:w-1/2 bg-slate-300">
          <Map locations={locations} />
        </div>
      </section>



    </>
  )
}

export default LocationsListing