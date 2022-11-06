import Image from "next/image";
import Link from "next/link";

function CategorySection() {

    const categories = [
        {
            name: 'Administration',
            svgIcon: 'Admin.svg',
            queryParam: 'Administration',
        },
        {
            name: 'Education',
            svgIcon: 'Education.svg',
            queryParam: 'Education',
        },
        {
            name: 'Emergency Services',
            svgIcon: 'Emergency.svg',
            queryParam: 'Emergency Services',
        },
        {
            name: 'Faith and Religion',
            svgIcon: 'Religion.svg',
            queryParam: 'Faith and Religion',
        },
        {
            name: 'Financial Services',
            svgIcon: 'Finance.svg',
            queryParam: 'Financial Services',
        },
        {
            name: 'Health',
            svgIcon: 'Health.svg',
            queryParam: 'Health',
        },
        {
            name: 'Media, Sports & Entertainements',
            svgIcon: 'Sport.svg',
            queryParam: 'Media, Sport %26 Entertainement',
        },
        {
            name: 'Retail',
            svgIcon: 'Retail.svg',
            queryParam: 'Retail',
        },
        {
            name: 'Travel, Transport and Tourism',
            svgIcon: 'Travel.svg',
            queryParam: 'Travel, Transport and Tourism',
        },
        {
            name: 'Others',
            svgIcon: 'Others.svg',
            queryParam: 'Others',
        }
    ]

    return (
        <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl px-10 mx-auto sm:text-center">
                <p className="text-blue-500 font-medium uppercase">Export Data to CSV</p>
                <h2 className="font-bold text-3xl sm:text-4xl mt-3">Browse by Parent Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 my-12 sm:my-16">

                    {categories.map((category, index) => (
                        <Link key={category.name} href={{pathname: "/locations", query : { category: category.queryParam } }} className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
                            <Image src={`/assets/imgs/${category.svgIcon}`} width={64} height={64} alt={category.name} />
                            <p className="font-bold mt-4 text-center">{category.name}</p>
                        </Link>
                    ))}

                </div>
            </div>
        </section>

    );
}

export default CategorySection;