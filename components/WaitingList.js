import React, { useState } from "react";
import { useRouter } from "next/router";

function WaitingList() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    // Now sending email through sendgrid automation once contact is added to list

    // fetch('/api/sendgrid/sendEmail', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(body),
    // })

    fetch("/api/sendgrid/addContact", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    fetch("/api/trees/plantTree", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    router.push("/thanks");
  };

  return (
    <div className="bg-white py-16 sm:py-24" id="sign-up">
      <div className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-primary-verylight/30 rounded-r-3xl" />
          <svg
            className="absolute top-8 left-1/2 -ml-3"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
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
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-primary overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              {/* <svg
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1463 360"
                    >
                    <path
                        className="text-indigo-500 text-opacity-40"
                        fill="currentColor"
                        d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                    />
                    <path
                        className="text-indigo-700 text-opacity-40"
                        fill="currentColor"
                        d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                    />
                    </svg> */}
              <img
                className="h-full w-full object-cover bg-primary"
                src="/trees-hero.jpg"
                alt="Trees"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Get notified when we&rsquo;re launching.
                </h2>
                <div className="m-10 col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    src="/OneTreePlanted_Key Logo_Long_White.png"
                    alt="One Tree Planted Logo"
                    width="200"
                  />
                </div>
                <p className="mt-6 mx-auto max-w-2xl text-lg text-white">
                  We have partnered with One Tree Planted to plant a tree for
                  each new sign up to our waiting list.
                </p>
              </div>
              <form
                className="mt-12 sm:mx-auto sm:flex"
                onSubmit={handleSubmit}
              >
                <div className="min-w-0 mt-4 sm:mt-0 sm:ml-3 flex-1">
                  <label htmlFor="cta-first-name" className="sr-only">
                    First
                  </label>
                  <input
                    id="cta-email"
                    type="text"
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    placeholder="First Name"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="min-w-0 mt-4 sm:mt-0 sm:ml-3 flex-1">
                  <label htmlFor="cta-last-name" className="sr-only">
                    Last
                  </label>
                  <input
                    id="cta-email"
                    type="text"
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    placeholder="Last Name"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="min-w-0 mt-4 sm:mt-0 sm:ml-3 flex-1">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md  py-3 bg-primary text-base font-medium text-white shadow hover:bg-tertiary sm:px-10"
                  >
                    Yes, I want to invest in our planet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WaitingList;
