import Image from "next/image";
import Link from "next/link";

function CategorySection() {

    const categories = [
        {
            name: 'Administration',
            svgIcon: 'Admin.svg'
        },
        {
            name: 'Education',
            svgIcon: 'Education.svg'
        },
        {
            name: 'Emergency Services',
            svgIcon: 'Emergency.svg'
        },
        {
            name: 'Faith and Religion',
            svgIcon: 'Religion.svg'
        },
        {
            name: 'Financial Services',
            svgIcon: 'Finance.svg'
        },
        {
            name: 'Health',
            svgIcon: 'Health.svg'
        },
        {
            name: 'Media, Sports & Entertainements',
            svgIcon: 'Sport.svg'
        },
        {
            name: 'Retail',
            svgIcon: 'Retail.svg'
        },
        {
            name: 'Travel',
            svgIcon: 'Travel.svg'
        },
        {
            name: 'Others',
            svgIcon: 'Others.svg'
        }
    ]

    return (
        <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl px-10 mx-auto sm:text-center">
                <p className="text-blue-500 font-medium uppercase">Export Data to CSV</p>
                <h2 className="font-bold text-3xl sm:text-4xl mt-3">Browse by Parent Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 my-12 sm:my-16">

                    {categories.map((category, index) => (
                        <Link key={category.name} href="/locations" className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
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