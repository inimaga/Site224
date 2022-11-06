import Head from 'next/head'
import { getPost } from '../lib/md_content_reader.js';

export async function getStaticProps() {
  const post = await getPost('https://raw.githubusercontent.com/inimaga/Site224/main/LICENSE.md');
  return {
    props: { post },
  };
}

function Licence({ post }) {

  return (
    <>
      <Head>
        <title>Site224 | License</title>
      </Head>

      <main className="px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <article className="min-w-full p-10 mx-auto" dangerouslySetInnerHTML={{ __html: post.body }} />

        <style jsx global>{`
          h1 {
            font-weight: bold;
            font-size: 32px;
            text-align: center;
            margin-bottom: 20px;
          }
          h2 {
            font-weight: bold;
            font-size: 28px;
          }
          h3 {
            font-weight: bold;
            font-size: 22px;
          }
          h4 {
            font-weight: bold;
            font-size: 20px;
          }
          p {
            margin-bottom: 20px;
          }
          ul {
            {/* TBD later */}
          }
      `}</style>
      </main>
    </>
  )
}

export default Licence;
