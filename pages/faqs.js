
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import WaitingList from '../components/WaitingList'
import Header from '../components/Header'
import Head from 'next/head'
import { Client } from '@notionhq/client';

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID_FAQS,
  });

  return {
    props: {
      faqsArray: response.results,
    },
    revalidate: 1,
  };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Faqs(faqsArray) {

    let faqs = []

    faqsArray['faqsArray'].forEach(faq => {
      if (faq.properties["Status"].select?.name === "Live") {
        const questions_answer = {
          question: faq.properties["Question"].title[0].plain_text,
          answer: faq.properties["Answer"].rich_text[0].plain_text,
        }
        faqs.push(questions_answer)
      }
    })

    return ( 
        <div className="main-container">
        <Head>
          <title>Biome - Invest in our Planet</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                    {faqs.map((faq) => (
                        <Disclosure as="div" key={faq.question} className="pt-6">
                        {({ open }) => (
                            <>
                            <dt className="text-lg">
                                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                <span className="font-medium text-gray-900">{faq.question}</span>
                                <span className="ml-6 h-7 flex items-center">
                                    <ChevronDownIcon
                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                    aria-hidden="true"
                                    />
                                </span>
                                </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <p className="text-base text-gray-500">{faq.answer}</p>
                            </Disclosure.Panel>
                            </>
                        )}
                        </Disclosure>
                    ))}
                    </dl>
                </div>
                </div>
            </div>
        <WaitingList/>
        <Footer/>
        </div>
    )
}