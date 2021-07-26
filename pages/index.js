import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kiteboard Milwaukee</title>
        <meta name='keywords' content='kiteboard, kiteboarding' />
      </Head>
      <main id='main-content'>

        (Home)

        <div>
          <a href='/images/3e3127bb1a.png' rel='lightbox[lb207]'>
            <img
              src='/images/f971906372.jpg'
              width='300'
              height='200'
              border='0'
              alt='kiteboarder in the water'
            />
          </a>

          <h2>Welcome to Kiteboarding in Milwaukee</h2>
          <p>
          We hope you find this site a great resource for kiters of all abilities!
          Whether you are into kiteboarding, kitesurfing, landboarding, snowkiting, or whatever with a kite to move you around, you are welcome here.
          Your comments and suggestions will help make this a great site.
          Just 
            <a href='contact-section'>
              contact us here
            </a>
          or send us an email directly to
            <a href='email'>
              info@adventurekiteboarding.com
            </a>
          or call 414-520-1493. Thanks & enjoy!
          </p>
        </div>

        <div></div>
      </main>
    </div>
  )
}
