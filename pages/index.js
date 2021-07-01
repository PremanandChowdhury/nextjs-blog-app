import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
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
    </Layout>
  )
}
