import Link from "next/link";

function FAQ() {
    return (
        <section className="py-24 bg-white">
            <div className="px-8 mx-auto max-w-7xl lg:px-16">
                <h2 className="mb-4 text-xl font-bold md:text-3xl">About the Project (FAQ)</h2>
                <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
                    <div>
                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">What does this website do?</h5>
                        <p>This project organises and facilitates download of location data scrapped from OpenStreetMap, for the country Guinea.</p>
                        
                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">Is the site free to use?</h5>
                        <p>Site224 is completely free to use and provided under the GNU General Public License. WITHOUT ANY WARRANTY.</p>
                    </div>
                    <div>
                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">How was the site built?</h5>
                        <p>Standing on the shoulder of giants. Using free and opensource technologies. See <Link href={"https://github.com/inimaga/Site224"} target="_blank" className="hover:text-blue-500 underline">GitHub repo</Link> for more information.</p>

                        <h5 className="mt-10 mb-3 font-semibold text-gray-900">Any future plans?</h5>
                        <p>This will depend on site usage and feature requests. If you have any suggestions, feel free to <Link href={"https://issanimaga.com/contact/"} className="hover:text-blue-500 underline">contact me</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;