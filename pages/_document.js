// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Local Styles */}
        {/* <link rel="stylesheet" href="/assets/fonts/fontawesome/css/fontawesome.css" /> */}
        {/* <link rel="stylesheet" href="/assets/fonts/droidKufi/DroidKufiRegular.css" />
        <link rel="stylesheet" href="/assets/fonts/english-and-arabic-fonts/stylesheet.css" />
        <link rel="stylesheet" href="/assets/fonts/home-icons/style.css" />
        <link rel="stylesheet" href="/assets/css/style.css" /> */}

        {/* <link rel="stylesheet" href="/assets/slider/assets/mobirise/css/mbr-additional.css" /> */}
        <link rel="stylesheet" href="/assets/mobirise/css/mbr-additional.css" />

        {/* <link rel="stylesheet" href="/assets/css/swiper.css" /> */}
        {/* <link rel="stylesheet" href="/assets/css/constants.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="stylesheet" href="/assets/fonts/gill-sans/style.css" />
        <link rel="stylesheet" href="/assets/fonts/salamandre/stylesheet.css" />
        <link rel="stylesheet" href="/assets/fonts/tungsten/stylesheet.css" />
        <link rel="stylesheet" href="/assets/fonts/language-button/style.css" />
        <link rel="stylesheet" href="/assets/fonts/tcf/stylesheet.css" /> */}
        <link rel="stylesheet" href="/assets/scripts/odometer/themes/odometer-theme-car.css" />
        {/* <link rel="stylesheet" href="/assets/jssocials/jssocials.css" /> */}
        {/* <link rel="stylesheet" href="/assets/jssocials/jssocials-theme-flat.css" /> */}
        {/* <link rel="stylesheet" href="/assets/mobirise/css/mbr-additional.css" /> */}
        {/* <link rel="stylesheet" href="/assets/web/assets/mobirise-icons/mobirise-icons.css" /> */}
        <link rel="stylesheet" href="/assets/css/animate.css" />
        {/* <link rel="shortcut icon" href="/assets/images/57.png" type="image/png" /> */}

        {/* External Styles */}

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        /> */}
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        /> */}
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        /> */}
         <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Antic+Slab&display=swap"
          rel="stylesheet"
        />

      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Scripts should be loaded using `next/script` or inside _app.js if needed per page */}
        {/* <script src="/assets/scripts/script.js"></script> */}

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="http://code.highcharts.com/highcharts.js"></script>
        {/* <script type="text/javascript" src="assets/scripts/script.js"></script> */}
        {/* <script src="assets/tether/tether.min.js"></script> */}
        <script src="/assets/scripts/odometer/odometer.js"></script>
        <script src="/assets/scripts/wow.min.js"></script>
        {/* <script src="assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js"></script> */}
        <script src="/assets/slider/assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js"></script>
        {/* <script type="text/javascript" src="assets/scripts/jquery-ui.js"></script> */}
        {/* <script type="text/javascript" src="assets/scripts/jquery.dateselect.js"></script> */}
        {/* <script type="text/javascript" src="assets/scripts/jquery.mousewheel.min.js"></script> */}
        {/* <script type="text/javascript" src="assets/scripts/jquery.prettynumber.js"></script> */}
        {/* <script type="text/javascript" src="assets/scripts/moment.js"></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.js"></script>
        {/* <script src="https://cdn.ckeditor.com/4.25.1/standard/ckeditor.js"></script> */}

        {/* <script src="assets/touchswipe/jquery.touch-swipe.min.js"></script> */}
        {/* <script src="http://code.highcharts.com/highcharts.js"></script> */}

        {/* <script src="assets/jssocials/jssocials.js"></script> */}
        {/* <script src="assets/theme/js/script.js" type="text/javascript"></script> */}
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
      </body>
    </Html>
  );
}
