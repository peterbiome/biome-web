import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
    MenuIcon,
    XIcon,
    InboxIcon,
    AnnotationIcon,
    ChatAlt2Icon,
    GlobeIcon,
    CurrencyPoundIcon,
    QuestionMarkCircleIcon,
  } from '@heroicons/react/outline'

  
function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'About Us', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faqs' },
  ]
  
const solutions = [
    {
      name: 'Impact of green pensions',
      description: 'How much impact does this really have? See our in depth analysis',
      href: '/blog/b3b0fd72-33dc-48be-98ff-19cca6eaf789?t=Impact%20of%20green%20pensions',
      icon: GlobeIcon,
    },
    {
      name: 'Our green plans',
      description: 'See our plans on offer and their fees',
      href: '/blog/b1cea878-3cb5-41b4-849d-76f8be8f462f?t=Our%20green%20plans',
      icon: CurrencyPoundIcon,
    },
]

function Header () {
    return (
        <header>
            <Popover className="relative bg-white">
                <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="/">
                        <span className="sr-only">Workflow</span>
                        <img
                        className="h-8 w-auto sm:h-10"
                        src="biome_icon-c1.png"
                        alt=""
                        />
                    </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    <Popover className="relative">
                        {({ open }) => (
                        <>
                            <Popover.Button
                            className={classNames(
                                open ? 'text-gray-900' : 'text-gray-500',
                                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                            )}
                            >
                            <span>Green Pensions</span>
                            <ChevronDownIcon
                                className={classNames(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                )}
                                aria-hidden="true"
                            />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                    {solutions.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                    >
                                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white sm:h-12 sm:w-12">
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                        </div>
                                    </a>
                                    ))}
                                </div>
                                </div>
                            </Popover.Panel>
                            </Transition>
                        </>
                        )}
                    </Popover>

                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
                        {item.name}
                        </a>
                    ))}
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    {/* <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                        Sign in
                    </a> */}
                    <a
                        href="#sign-up"
                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        Sign up
                    </a>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                    focus
                    className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                            />
                            </div>
                            <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid grid-cols-1 gap-7">
                            {solutions.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                </a>
                            ))}
                            </nav>
                        </div>
                        </div>
                        <div className="py-6 px-5">
                        <div className="grid grid-cols-2 gap-4">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-gray-900 hover:text-gray-700"
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        <div className="mt-6">
                            <a
                            href="#sign-up"
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                            Join waiting list
                            </a>
                            {/* <p className="mt-6 text-center text-base font-medium text-gray-500">
                            Existing customer?
                            <a href="#" className="text-gray-900">
                                Sign in
                            </a>
                            </p> */}
                        </div>
                        </div>
                    </div>
                    </Popover.Panel>
                </Transition>
                </Popover>
            </header>
    )
};
export default Header;