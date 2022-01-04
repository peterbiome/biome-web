import Head from "next/head";
import {
  CheckCircleIcon,
  SwitchHorizontalIcon,
  EyeIcon,
  CurrencyPoundIcon,
  BellIcon,
} from "@heroicons/react/outline";

import Footer from "../components/Footer";
import WaitingList from "../components/WaitingList";
import Header from "../components/Header";
import React, { useState } from "react";

const includedFeatures = [
  "No exit fees",
  "Full transparency",
  "Impact reports on top holdings",
  "Trusted fund manager",
];

export default function Home() {
  const [drinkingWater, setdrinkingWater] = useState(23543);
  const [co2, setCo2] = useState(4324);
  const [trees, setTrees] = useState(12453);
  const [pensionSize, setPensionSize] = useState(19000);
  const [fee, setFee] = useState(0.75);

  const multipliers = {
    drinkingWater: 0.2,
    co2: 0.003,
    trees: 0.008,
  };

  const fees = {
    baillieGifford: {
      under: 0.0075,
      over: 0.005,
      threshold: 100000,
    },
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
  };

  function handleChange(event) {
    setPensionSize(event.target.value);
    setCo2(Math.round(event.target.value * multipliers.co2));

    setTrees(Math.round(event.target.value * multipliers.trees));
    setdrinkingWater(
      Math.round(event.target.value * multipliers.drinkingWater)
    );
    if (event.target.value > fees.baillieGifford.threshold) {
      const underFee =
        fees.baillieGifford.threshold * fees.baillieGifford.under;
      const overFee =
        (event.target.value - fees.baillieGifford.threshold) *
        fees.baillieGifford.over;
      const totalFee = underFee + overFee;
      const percentageFee = (totalFee / event.target.value) * 100;

      setFee(roundToHundredth(percentageFee));
    } else {
      setFee(0.75);
    }
  }

  return (
    <div className="main-container">
      <Head>
        <title>Biome - Invest in our Planet</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Easily consolidate your pensions into one simpler and
                      greener plan, with a trusted provider. Gain full
                      transparency over your pension and environmental impact."
        />
      </Head>
      <div className="bg-white">
        <Header />
        <main>
          <div>
            {/* Hero card */}
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src="/trees-hero.jpg"
                      alt="Trees"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">Invest in our</span>
                      <span className="block text-primary-verylight">
                        Planet
                      </span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                      Easily consolidate your pensions into one simpler and
                      greener plan, with a trusted provider. Gain full
                      transparency over your pension and environmental impact.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                        <a
                          href="#sign-up"
                          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary hover:text-white bg-white hover:bg-primary-light sm:px-8"
                        >
                          Join the waiting list
                        </a>
                        {/* <a
                                href="#"
                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                            >
                                Live demo
                            </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo cloud */}
            <div className="bg-gray-100">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                  Partnered with
                </p>
                <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img
                      className="h-12"
                      src="/OneTreePlanted_Key Logo_Long_Black.png"
                      alt="One Tree Planted logo"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img
                      className="h-20"
                      src="/Wealthkernel.png"
                      alt="Wealth Kernel logo"
                    />
                  </div>
                  <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                    <img
                      className="h-12"
                      src="/purepng.com-blackrock-logologobrand-logoiconslogos-251519938910ako99.png"
                      alt="Blackrock logo"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img
                      className="h-12"
                      src="/lloyds_bank_logo.png"
                      alt="Lloyds Bank logo"
                    />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                    <img
                      className="h-12"
                      src="/1024px-Baillie_Gifford_logo.svg.png"
                      alt="Baillie Gifford logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More main page content here... */}
        </main>
      </div>
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Impact Calculator
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Research by Bailiie Gifford. Based upon move the total value of
              assets to our Better World plan.
            </p>
          </div>
        </div>
        <div className="text-center m-10">
          <div className="m-10">
            <p className="mt-4 text-lg text-gray-500">Estimated pension size</p>
            <h3 className="text-2xl font-extrabold text-primary-light sm:text-3xl">
              £{numberWithCommas(pensionSize)}
            </h3>
          </div>
          <input
            type="range"
            value={pensionSize}
            onChange={handleChange}
            className="px-8 w-8/12 bg-primary appearance-none w-full h-1 bg-grey rounded cursor-pointer slider-thumb"
            id="pension-size"
            name="pension-size"
            min="0"
            max="200000"
          ></input>
          <div className="m-1">
            <p className="mt-4 text-lg text-gray-500">Equivalent of...</p>
          </div>
        </div>

        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Litres of drinking water saved
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-primary">
                      {numberWithCommas(drinkingWater)}
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Metrics tons of CO2 avoided
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-primary">
                      {numberWithCommas(co2)}
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Trees planted
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-primary">
                      {numberWithCommas(trees)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
                    <CurrencyPoundIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Easily consolidate
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Tell us about your pension history and we'll transfer
                    everything over automatically.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-light"
                    >
                      See more
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur
                    donec aliquet. Mi venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Marcia Hill, Digital Marketing Manager</div>
                  </div>
                </footer>
              </blockquote>
            </div> */}
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="homepage_transfer.png"
                  alt="Transfering a your old pensions"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
                    <SwitchHorizontalIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Choose your green pension strategy
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Choose either a reccommended strategy for you or choose from
                    a number of our sustainable pension plans. Green plans,
                    without the comprimise.
                  </p>
                  <div className="mt-6">
                    <a
                      href="'/blog/b1cea878-3cb5-41b4-849d-76f8be8f462f?t=Our%20green%20plans'"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-light"
                    >
                      See more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="homepage_plans.png"
                  alt="Choose a pension plan"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
                    <EyeIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Full Transparency
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Have full transparency into what companies are in your
                    portfolio and what positive impact they are having. Biome
                    produces an Impact articles on all of our top invested
                    companies.
                  </p>
                  {/* <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    See more
                  </a>
                </div> */}
                </div>
              </div>
              {/* <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur
                    donec aliquet. Mi venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Marcia Hill, Digital Marketing Manager</div>
                  </div>
                </footer>
              </blockquote>
            </div> */}
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="homepage_timeline.png"
                  alt="Track your pension progress"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
                    <BellIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    Stay in control
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Maintain full control over your pension, switch plans & top
                    up when needed.
                  </p>
                  {/* <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    See more
                  </a>
                </div> */}
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="homepage_notify.png"
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                Simple no-tricks pricing
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Unlike other pension providers, we have no hidden fees or exit
                fees.
              </p>
            </div>
          </div>
        </div>
        <div className="mt- bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-100" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div className="flex-1 bg-white px-6 py-8 lg:p-12 flex-auto">
                  <div className="mt-12 sm:mx-auto sm:flex justify-between">
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      Better World Plan
                    </h3>

                    <h3 className="text-2xl font-extrabold text-primary sm:text-3xl">
                      £{numberWithCommas(pensionSize)}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-500 text-right">
                    Estimated pension size
                  </p>
                  <div className="m-5 mx-0">
                    <input
                      type="range"
                      value={pensionSize}
                      onChange={handleChange}
                      className="px-8 w-full range-primary"
                      id="pension-size-fee"
                      name="pension-size-fee"
                      min="0"
                      max="200000"
                    ></input>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-primary">
                        What's included
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />
                    </div>
                    <ul
                      role="list"
                      className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                    >
                      {includedFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start lg:col-span-1"
                        >
                          <div className="flex-shrink-0">
                            <CheckCircleIcon
                              className="h-5 w-5 text-primary-light"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-10 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                  <p className="text-lg leading-6 font-medium text-gray-900">
                    Better World Plan
                  </p>
                  <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                    <span>{fee}</span>
                    <span className="ml-3 text-xl font-medium text-gray-500">
                      %
                    </span>
                  </div>
                  <p className="mt-4 text-sm">
                    <a className="font-medium text-gray-500">Annual fee</a>
                  </p>
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <a
                        href="#sign-up"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-light"
                      >
                        Sign up
                      </a>
                    </div>
                  </div>
                  {/* <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-900">
                    Get a free sample <span className="font-normal text-gray-500">(20MB)</span>
                  </a>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full bg-primary-verylight/40 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      rx={4}
                      className="text-primary-light"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/wind-farm.jpg"
                  alt="Wind farm - renewable energy"
                />
                <div className="absolute inset-0 bg-primary-light mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary opacity-90" />
                <div className="relative px-8">
                  <div>
                    {/* <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                    alt="Workcation"
                  /> */}
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-secondary"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        Greening your pension is 21x more effective at reducing
                        your carbon footprint than giving up flying, going
                        veggie and switching energy provider combined.
                      </p>
                    </div>

                    <footer className="mt-4">
                      <p className="hover:underline text-base font-semibold text-primary-verylight">
                        Research by{" "}
                        <a href="https://www.makemymoneymatter.co.uk">
                          Make My Money Matter
                        </a>
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                What are green pensions?
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  The typical UK pension fund has up to 1/3 of its investments
                  in companies that harm people and the planet (research from
                  The Path).
                </p>
                <p className="text-base leading-7">
                  A green or ethical pension does the opposite, excluding fossil
                  fuel, weapons, tobacco and other bad actors; instead investing
                  heavily in companies that are aligned with the Paris
                  Agreement’s vision for a greener future.
                </p>
                <p className="text-base leading-7">
                  New research from Make My Money Matter, Aviva and Route2
                  estimates green pensions are nearly 57 times more effective at
                  cutting emissions than adopting a vegan diet.
                </p>
                <p className="text-base leading-7">
                  Biome lets you easily transfer your current and old pensions
                  into one place, gives you a choice of green pension
                  strategies, and gives you regular updates on the positive
                  impact that you are making.
                </p>
              </div>
            </div>

            {/* Stats section */}
            {/* <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <a href="#" className="text-base font-medium text-indigo-600">
                {' '}
                Learn more about how we're changing the world <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      <WaitingList />
      <Footer />
    </div>
  );
}
