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
              {' '}
              contact us here
              {' '}
            </a>
            or send us an email directly to
            <a href='email'>
              {' '}
              info@adventurekiteboarding.com
              {' '}
            </a>
            or call 414-520-1493. Thanks & enjoy!
          </p>
        </div>

        <div>
          <a href='http://www.adventurekiteboarding.com/'>
            <h3>10% Cash Back on all orders</h3>
          </a>
          <a href='typo3temp/GB/8ed825b410.png' rel='lightbox[lb243]'>
            <img
              src='/images/efcf6fe204.png'
              width='600'
              height='276'
              border='0'
              alt='Coupon for the kiteboarding shop'
            />
          </a>
        </div>

        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tw58Aq8pWis"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <h3>Air & Water Show Weekend SSYC</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tMI2nRn7-dA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      
        <div>
          <a href='http://www.adventurekiteboarding.com/ozone-chrono-v2-foil-kite/'>
            {/* !!!!!!!!!!!!!!!! 404 error here !!!!!!!!!!!!!!!!!!!!! */}
            <h3>Ozone Chrono V2 foil kites in stock Now!</h3>
          </a>

        </div>
      </main>
    </div>
  )
}
