import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kiteboard Milwaukee</title>
        <meta name='keywords' content='kiteboard, kiteboarding' />
      </Head>
      <section>

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
          <a href='/images/0d315f6162.png' rel='lightbox[lb208]'>
            <img
              src='/images/1cd9313e87.jpg'
              width='300'
              height='300'
              border='0'
              alt='Ozone Chrono V2 foil kite'
            />
          </a>
          <p>
            A great option for lighter wind days, high speeds when the wind picks up, and gobs of upwind ability.
          </p>
        </div>

        <div>
          <a href='contact-section'>
            <h3>Trade in Your Old Kites & Boards</h3>
          </a>
          <p>
            We will make you a good offer on your old gear.
            It doesn't matter how beat up, abused, torn, or ugly it is.
            The worse the better.
            We actually want all unsafe or questionable gear off our beaches.
            It keeps you and the public safer.
            Get a credit on new equipment for your old gear.
          </p>
          <p>
            414-760-1493 - or - 414-520-1493
            <br/>
            sales@adventurekiteboarding.com
          </p>
        </div>

        <div>
          <a href='http://www.adventurekiteboarding.com/kiteboarding-products/'>
            <h3>Combine your Ozone Chrono with an MHL Lift hydrofoil for the pinnacle experience</h3>
          </a>
          <img
            src='/images/e0834478d4.jpg'
            width='600'
            height='400'
            border='0'

            alt='' // come back to this
          />
          <p>The closest thing to a Hoverboard yet invented!</p>
        </div>
      </section>
    </div>
  )
}
