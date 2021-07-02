import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm <strong className='highlight'>Prem</strong>. I'm an aspiring{' '}
          <strong className='highlight'>MERN Developer</strong> and{' '}
          <strong className='highlight'>Open Source Contributor</strong>.
        </p>
        <p>
          I have been doing stuffs related to web enhancement and bagging new
          Skills lately. <br />
          You can check it here @{' '}
          <a href='https://github.com/PremanandChowdhury'>GitHub</a>.
        </p>
        <p>
          (This website is built on <a href='https://nextjs.org'>Next.js</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title} <br /> {id} <br /> {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
