import { useRouter } from 'next/router';

function SearchHero() {
    const router = useRouter();

    const handleSubmit = event => {
        event.preventDefault();
        var category = event.target.elements.category.value ? event.target.elements.category.value : '';
        var city = event.target.elements.city.value ? event.target.elements.city.value : '';

        //redirect to locations page
        router.push({ pathname: '/locations', query: { category: category, city: city }, });
    };

    return (
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

            <div className="relative z-30 h-48 px-10 bg-white lg:h-32">
                <form onSubmit={handleSubmit} className="flex flex-col items-center h-auto max-w-lg p-6 mx-auto space-y-3 overflow-hidden transform -translate-y-12 bg-white rounded-lg shadow-md lg:h-24 lg:max-w-6xl lg:flex-row lg:space-y-0 lg:space-x-3">
                    <div className="w-full h-12 border-2 border-gray-200 rounded-lg lg:border-0 lg:w-auto lg:flex-1">
                        <input type="text" name="category" className="w-full h-full px-4 font-medium text-gray-700 rounded-lg sm:text-lg focus:bg-gray-50 focus:outline-none" placeholder="Enter Category Here" />
                    </div>
                    <div className="w-0.5 bg-gray-100 h-10 lg:block hidden"></div>
                    <div className="relative flex items-center w-full h-12 border-2 border-gray-200 rounded-lg lg:w-auto lg:border-0 lg:flex-1">
                        <input type="text" name="city" className="w-full h-full px-4 font-medium text-gray-700 rounded-lg sm:text-lg focus:bg-gray-50 focus:outline-none" placeholder="Enter City Here" />
                        <svg className="absolute right-0 w-6 h-6 mr-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div className="w-full h-full lg:w-auto">
                        <button type="submit" className="inline-flex items-center justify-center w-full h-full px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 lg:w-64">SEARCH</button>
                    </div>
                </form>
            </div>

        </section>

    );
}

export default SearchHero;