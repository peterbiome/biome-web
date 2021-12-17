import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ShareIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import WaitingList from "../components/WaitingList";
import Header from "../components/Header";
import Head from "next/head";

export default function Thanks() {
  return (
    <div className="main-container">
      <Head>
        <title>Biome - Invest in our Planet</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto divide-gray-200">
            <h2 className="mb-16 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Thanks for signing up!
            </h2>
            <div className="flex-auto">
              <div className="mb-20 max-w-lg mx-auto">
                <img
                  className="w-full rounded-lg"
                  src="/pine-tree.png"
                  alt=""
                />
              </div>
              <div className="max-w-lg prose prose-indigo prose-lg text-gray-500 mx-auto text-center">
                <img
                  className="text-center  rounded-lg"
                  src="/OneTreePlanted_Key Logo_Long_Black.png"
                  alt=""
                />
                <p>
                  You are one step closer to making a huge difference and have
                  also just planted one tree in Ethiopia through our partner,
                  One Tree Planted.
                </p>
                <p>
                  We are working on the final touches for our app and awaiting
                  FCA approval. As soon as we are ready, well reach out to our
                  waiting list.
                </p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Share
                  <ShareIcon
                    className="ml-3 -mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
                <img
                  className="w-full rounded-lg"
                  src="https://digitalhumani.com/reforestation-organisations/OneTreePlanted/OneTreePlanted-Ethiopia.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-10 text-center prose prose-indigo prose-lg text-gray-500 mx-auto">
              <p>
                See the awesome stuff One Tree Planted are doing{" "}
                <a href="/">here</a> 👈
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
