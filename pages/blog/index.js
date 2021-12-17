import Footer from '../../components/Footer'
import WaitingList from '../../components/WaitingList'
import Header from '../../components/Header'
import { Client } from '@notionhq/client';
import Link from 'next/link'
import Head from 'next/head'


export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  return {
    props: {
      posts: response.results,
    },
    revalidate: 1,
  };
}

export default function Blog({ posts }) {
    return (
      <div className="main-container">
        <Head>
          <title>Biome - Invest in our Planet</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header/>
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {posts.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id}>
                <a className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                      <img className="h-48 w-full object-cover" src={post.properties["Image"].files[0] && post.properties["Image"].files[0].file.url} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                          {post.properties["Tags"].multi_select[0].name}
                        </p>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">{post.properties["Title"].title[0].text.content}</p>
                          <p className="mt-3 text-base text-gray-500">{post.properties["Description"].rich_text[0].text.content}</p>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <span className="sr-only">{post.properties["Edited by"].last_edited_by.name}</span>
                            <img className="h-10 w-10 rounded-full" alt="" src="https://s3-us-west-2.amazonaws.com/public.notion-static.com/f92f608a-ab8f-4bd5-9d7d-27c4e2f0064b/1628589731063.jpeg" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <a className="hover:underline">
                              {post.properties["Edited by"].last_edited_by.name}
                            </a>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time>{post.properties["Last Updated"].last_edited_time.slice(0, -14)}</time>
                            {/* <span aria-hidden="true">&middot;</span>
                            <span>post.readingTime read</span> */}
                          </div>
                        </div>
                      </div>
                    </div>

                </a>
                </Link>
              ))}
            </div>
            
          </div>
        </div>
        <WaitingList/>
        <Footer/>
      </div>
    )
}
