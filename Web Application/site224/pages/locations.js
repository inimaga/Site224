import Image from "next/image";

function LocationsListing() {
  //Temporary data
  const dummyData_location_list = [
    {
      name: 'Ambassade de la Republique federale d\'Allemagne',
      parentCategory: 'Administration',
      category: "Embassy",
      city: 'Conakry',
      latitude: '9.5122736',
      longitude: '-13.7160043',
      verified: false,
    },
    {
      name: 'Ambassade de Palestine',
      parentCategory: 'Administration',
      category: "Embassy",
      city: 'Conakry',
      latitude: '9.5118561',
      longitude: '-13.7160678',
      verified: false,
    },
    {
      name: 'Institut Nako Diabaté',
      parentCategory: 'Education',
      category: "College",
      city: 'Conakry',
      latitude: '9.621789791',
      longitude: '-13.58247561',
      verified: false,
    },
    {
      name: 'Bicigui',
      parentCategory: 'Financial Services',
      category: "Atm",
      city: 'Conakry',
      latitude: '9.5756926',
      longitude: '-13.6205087',
      verified: false,
    }
  ]

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

      <section class="flex flex-col w-ful xl:flex-row">
        <div class="w-full xl:w-1/2 ">

          {dummyData_location_list.map((item, index) => (
            <div key={item.name} class="px-6 py-6 mb-6 mx-10 my-10 lg:pl-12 lg:pr-6 bg-white border border-gray-200 rounded-lg hover:shadow ease">
              <div class="flex flex-col justify-between lg:flex-row">

                <div class="w-full px-4 mb-4 lg:w-7/12 xl:w-8/12 lg:mb-0">
                  <h3 class="text-xl font-bold text-gray-700 text-center">{item.name}</h3>

                  <ul class="flex flex-wrap text-base text-left lg:text-lg mt-6">
                    <li class="flex items-center w-full mb-4 sm:w-1/2">

                      <Image class="mr-2" src="/assets/imgs/Category.svg" width={30} height={30} alt="Category" />
                      <p class="font-normal">{item.parentCategory}</p>
                    </li>
                    <li class="flex items-center w-full mb-4 sm:w-1/2">
                      <Image class="mr-2" src="/assets/imgs/Type.svg" width={30} height={30} alt="Type" />
                      <p class="font-normal">{item.category}</p>
                    </li>
                    <li class="flex items-center w-full mb-4 sm:w-1/2">
                      <Image class="mr-2" src="/assets/imgs/location.svg" width={30} height={30} alt="Location" />
                      <p class="font-normal">{item.city}</p>
                    </li>
                    <li class="flex items-center w-full mb-4 sm:w-1/2">
                      <p class="font-normal text-gray-600">Location verified? : {item.verified ? "True" : "False"} </p>
                    </li>
                  </ul>
                </div>
                <div class="w-full px-4 lg:w-5/12 2xl:w-4/12">
                  <div class="h-full p-12 text-center bg-[grey] rounded-xl" style={{ backgroundImage: `url('/assets/imgs/Placeholder2.png')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>

        <div class="w-full xl:w-1/2 bg-slate-300">
          <h1>TODO: Add map in this div section</h1>
        </div>
      </section>



    </>
  )
}

export default LocationsListing