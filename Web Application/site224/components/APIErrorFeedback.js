import Link from "next/link";
import Lottie from "react-lottie-player";

import errorAnimation from './animations/api_error.json'

function APIErrorFeedback() {
    return (
        <div className="flex flex-col py-40 px-10 bg-white items-center text-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold">An error occured during connection to the API. Please try again later. </h1>
          <h1 className="text-2xl font-bold">If the issue persists, <Link href="https://issanimaga.com/contact/" className="hover:text-indigo-600 underline">notify me here</Link></h1>
          <Lottie
            loop
            animationData={errorAnimation}
            play
            />
          <h1 className="text-2xl font-bold">Return to <Link href="/" className="hover:text-indigo-600 underline">🏠 Home</Link></h1>
        </div>
    );
}

export default APIErrorFeedback;