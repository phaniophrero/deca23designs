<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="Web Developers"
        content="DeCA23Designs is the place where you can get your desired website or app , and offers the support that you need.">
    <meta name="google-site-verification" content="-LsDOSddFpUnbmesCQWDDR3X-RB6rLGlkRkh3vI6k4A" />

    <link rel="icon" type="image/png" href="/img/23roses.png"> <!-- END Logo Image Bara Sus -->

    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/animate.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/responsive.css') }}" rel="stylesheet">
    <link href="{{ asset('css/frontend_css/passtrength.css') }}" rel="stylesheet">

    <script data-ad-client="ca-pub-5698931276596687" async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

    <title>DeCA23Designs</title>

</head>

<body>

    @include('include.navbar')

    <main id="main-content">
        @yield('content')

    </main>
    <!-- End Main Content-->

    <!-- Go to Top Button -->
    <a class="gotopbtn" id="back-to-top-btn" href="#"><i class="fas fa-angle-double-up arrows-up"></i></a>
    <!-- Sfarsit Go to Top Button -->

    @include('include.footer')


    <!-- Jquery CDN -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- END -- Jquery CDN -->
    <!-- Scroll Reveal CDN -->
    <script src="https://unpkg.com/scrollreveal"></script>
    <!-- END -- Scroll Reveal CDN -->
    <!-- Smooth Scroll CDN -->
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js">
    </script>
    <!-- END -- Smooth Scroll CDN -->
    <!-- Popper.js CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <!-- END -- Popper.js CDN -->
    <!-- Bootstrap CDN -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <!-- END -- Bootstrap CDN -->
    <!-- Bootstrap Bundle CDN -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
    <!-- End -- Bootstrap Bundle CDN -->
    <!-- Animation on Scroll CDN -->
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <!-- End -- Animation on Scroll CDN -->
    <!-- CDN Bodymovin iphoneX Animation Script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.9/lottie.min.js"
        integrity="sha256-Z6O4M7tqzCtU4AEYZT3+moexyqFde5vZNka/gcaixa0=" crossorigin="anonymous"></script>
    <!-- End CDN Bodymovin iphoneX Animation Script -->

    <script src="{{ asset('js/frontend_js/main.js') }}"></script>
    <script src="{{ asset('js/frontend_js/jquery.validate.js') }}"></script>
    <script src="{{ asset('js/frontend_js/passtrength.js') }}"></script>

    <!-- NAVBAR Shrink Script -->
    <script src="{{ asset('/js/navbar.js') }}"></script>
    <!-- End -- NAVBAR Shrink Script -->

    <!-- Managers Modal Script -->
    <script src="{{ asset('/js/managersModal.js') }}"></script>
    <!-- End -- Managers Modal Script -->

    <!-- Burger Menu Icon Script -->
    <script src="{{ asset('/js/burgerMenu.js') }}"></script>
    <!-- End -- Burger Menu Icon Script -->

    <!-- iphoneX Animation Script -->
    <script src="{{ asset('/js/phoneAnimation.js') }}"></script>
    <!-- End -- iphoneX Animation Script -->

    <!-- Projects Hover Script -->
    <script src="{{ asset('/js/projectsHover.js') }}"></script>
    <!-- End -- Projects Hover Script -->

    <!-- Smooth Scroll Script -->
    <script src="{{ asset('/js/smoothScroll.js') }}"></script>
    <!-- End -- Smooth Scroll Script -->

    <!-- More Details for App Script -->
    <script src="{{ asset('/js/details_App.js') }}"></script>
    <!-- End -- More Details for App Script -->

    <!-- Price for App Script -->
    <script src="{{ asset('/js/price_App.js') }}"></script>
    <!-- End -- Price for App Script -->

    <!-- Reveal Ads Script -->
    <script src="{{ asset('/js/revealAds.js') }}"></script>
    <!-- End -- Reveal Ads Script -->

    <!-- More Details for Card Script -->
    <script src="{{ asset('/js/details_Card.js') }}"></script>
    <!-- End -- More Details for Card Script -->

    <!-- More Details for Card 2 Script -->
    <script src="{{ asset('/js/details_Card2.js') }}"></script>
    <!-- End -- More Details for Card 2 Script -->

    <!-- Our Team Counter Script -->
    <script src="{{ asset('/js/ourTeamCounter.js') }}"></script>
    <!-- End -- Our Team Counter Script -->

    <!-- Back to Top Button Script -->
    <script src="{{ asset('/js/backtotop.js') }}"></script>
    <!-- End -- Back to Top Button Script -->
</body>

</html>