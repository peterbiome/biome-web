
import Footer from '../components/Footer'
import WaitingList from '../components/WaitingList'
import Header from '../components/Header'
import { Client } from '@notionhq/client';


export default function Article({ page }) {

    const getPageDisplay = () => {
        let jsx = [];
        page.forEach((block) => {
          if (block.type === 'paragraph') {
            jsx.push(<p>{block.paragraph.text[0]?.plain_text}</p>);
          }
          if (block.type === 'heading_1') {
            jsx.push(<h1>{block.heading_1.text[0]?.plain_text}</h1>);
          }
          if (block.type === 'heading_2') {
            jsx.push(<h2>{block.heading_2.text[0]?.plain_text}</h2>);
          }
          if (block.type === 'heading_3') {
            jsx.push(<h3>{block.heading_3.text[0]?.plain_text}</h3>);
          }
          if (block.type === 'quote') {
            jsx.push(<blockquote>{block.quote.text[0]?.plain_text}</blockquote>);
          }
          if (block.type === 'bulleted_list_item') {
            jsx.push(
              <ul role="list">
                <li>{block.bulleted_list_item.text[0]?.plain_text}</li>
              </ul>
            );
          }
        });
        return jsx;
    }
    
    return ( 
        <div className="main-container">
        <Header/>
        <div className="relative py-16 bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                <svg
                    className="absolute top-12 left-full transform translate-x-32"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                    <pattern
                        id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                </svg>
                <svg
                    className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                    <pattern
                        id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                </svg>
                <svg
                    className="absolute bottom-12 left-full transform translate-x-32"
                    width={404}
                    height={384}
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                    <pattern
                        id="d3eb07ae-5182-43e6-857d-35c643af9034"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                    >
                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                    </defs>
                    <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                </svg>
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="text-lg max-w-prose mx-auto">
                    <h1>
                        <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                        Introducing
                        </span>
                        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Title
                        </span>
                    </h1>
                    <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">{getPageDisplay()}
                        <figure>
                            <img
                            className="w-full rounded-lg"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                            alt=""
                            width={1310}
                            height={873}
                            />
                            <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
                        </figure>
                    </div>
                    </div>
                </div>
            </div>
        <WaitingList/>
        <Footer/>
        </div>
    )
}

export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.blocks.children.list({
        block_id: "3797d457d5c343ff9487a6fc5efdc7c3",
        page_size: 50,
      });

    return {
      props: {
        page: response.results,
      },
      revalidate: 1,
    };
}
