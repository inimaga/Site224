import Link from "next/link";

function NoResults() {
    return (
        <div className="flex flex-col py-64 bg-white items-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold">No locations found.. :(</h1>
          
            <h1 className="text-2xl font-bold">Return to <Link href="/" className="hover:text-indigo-600 underline">Home</Link></h1>
        </div>
    );
}

export default NoResults;