import Footer from "../../components/Footer";
import WaitingList from "../../components/WaitingList";
import Header from "../../components/Header";
import { Client } from "@notionhq/client";
import Head from "next/head";
import { Render } from "@9gustin/react-notion-render";

export const getStaticPaths = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const paths = response.results.map((path) => {
    return {
      params: { id: path.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const id = context.params.id;
  const notion = new Client({ auth: process.env.NOTION_API_KEY });

  try {
    const [page, content] = await Promise.all([
      await notion.pages.retrieve({ page_id: id }),
      await notion.blocks.children.list({
        block_id: id,
        page_size: 50,
      }),
    ]);
    return {
      props: {
        content: content.results,
        page: page,
      },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {
        content: null,
        page: null,
      },
      revalidate: 1,
    };
  }
}

export default function Article({ content, page }) {
  // const getPageDisplay = () => {
  //   let jsx = [];
  //   content.forEach((block) => {
  //     if (block.type === "paragraph") {
  //       let str = "";

  //       block.paragraph.text.forEach((text) => {
  //         if (text.href) {
  //           jsx.push(<a href={text.href}>{text.plain_text}</a>);
  //         } else if (text.annotations.bold) {
  //           jsx.push(<strong>{text.plain_text}</strong>);
  //         } else {
  //           jsx.push(<p>{text.plain_text}</p>);
  //         }
  //       });
  //     }
  //     if (block.type === "heading_1") {
  //       jsx.push(<h1>{block.heading_1.text[0]?.plain_text}</h1>);
  //     }
  //     if (block.type === "heading_2") {
  //       jsx.push(<h2>{block.heading_2.text[0]?.plain_text}</h2>);
  //     }
  //     if (block.type === "heading_3") {
  //       jsx.push(<h3>{block.heading_3.text[0]?.plain_text}</h3>);
  //     }
  //     if (block.type === "quote") {
  //       jsx.push(<blockquote>{block.quote.text[0]?.plain_text}</blockquote>);
  //     }
  //     if (block.type === "bulleted_list_item") {
  //       jsx.push(
  //         <ul role="list">
  //           <li>{block.bulleted_list_item.text[0]?.plain_text}</li>
  //         </ul>
  //       );
  //     }
  //   });
  //   return jsx;
  // };

  return (
    <div className="main-container">
      <Head>
        <title>{page.properties["Title"].title[0].plain_text}</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content={page.properties["Description"].rich_text[0]?.text.content}
        />
      </Head>
      <Header /> 
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
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
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    rx={4}
                    className="text-tertiary-light"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
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
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    rx={4}
                    height={4}
                    className="text-tertiary-light"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
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
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    rx={4}
                    className="text-tertiary-light"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 mx-auto lg:max-w-7xl ">
          <img
            className="h-96 w-full rounded-lg object-cover"
            src={page.cover?.external?.url || ""}
            alt="Trees"
          />
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-20 mb-10 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {page.properties["Title"].title[0].plain_text}
              </span>
            </h1>
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <Render blocks={content} classNames/>

              {/* {getPageDisplay()} */}
              {/* <figure>
                <img
                  className="w-full rounded-lg"
                  src={
                    page.properties["Bottom Image"].files.length > 0
                      ? page.properties["Bottom Image"].files.length[0]?.file
                          .url
                      : ""
                  }
                  alt=""
                  width={1310}
                  height={873}
                />
              </figure> */}
              <hr></hr>
              <p>
                Would like to contribute to our blog? Get in touch at{" "}
                <a
                  className="text-primary"
                  href="mailto:benjamin@biomeinvest.com"
                >
                  benjamin@biomeinvest.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <WaitingList />
      <Footer />
    </div>
  );
}
