import Link from "next/link";
import Lottie from "react-lottie-player";

import noResultsAnimation from './animations/no_results.json'

function NoResults() {
    return (
        <div className="flex flex-col py-40 px-10 bg-white items-center text-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold">No results were found for your search.</h1>
          
          <Lottie
            loop
            animationData={noResultsAnimation}
            play
            />
          <h1 className="text-2xl font-bold">Return to <Link href="/" className="hover:text-indigo-600 underline">🏠 Home</Link></h1>
        </div>
    );
}

export default NoResults;