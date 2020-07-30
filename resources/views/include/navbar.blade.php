<!-- // INCEPE  // -->
{{-- <div id="gradient-nav"></div> --}}
<header id="main-header" class="header-main">
    <a class="btn-course-page" href="#cursuri"><span>Inregistreaza-te</span> la Curs</a>
    <nav class="main-navLeft main-navbar">
        <ul class="nav-ul-left">
            <li class="nav-list"><a class="nav-link nav-link-brand" href="{{ url('/') }}">
                    <div class="logo-txt-btn-wrapper logo-txt-btn-wrapper-small"><img src="/images/logo-txt-btn.png"
                            class="logo-txt-btn" alt="">
                    </div>
                    De CA 23 Designs
                    <div class="logo-home-wrapper logo-home-wrapper-small"><a class="nav-link-home"
                            href="{{ url('/') }}">Home</a></div>
                </a></li>
            <li class="nav-list"><a class="nav-link" href="#projects">Projects</a></li>
            <li class="nav-list"><a class="nav-link" href="#header-intro">Apps</a></li>
        </ul>
        {{-- </nav> --}}

        <div class="logoContainer">
            <a class="navLogo" href="/"><img class="logoImg" src="/img/deca23designs.png" alt="Logo"></a>
            <a class="navLogo23" href="/"><img class="logoImg23" src="/img/23roses.png" alt="Logo"></a>
        </div>

        {{-- <nav class="main-navRight main-navbar"> --}}
        <ul class="nav-ul-right">

            <li class="nav-list"><a class="nav-link" href="#section-ads">Ad Campaigns</a></li>
            {{-- <li class="nav-list"><a class="nav-link" href="#contact">Contact</a></li>  --}}
            @if (empty(Auth::check()))
            <li class="nav-list"><a class="nav-link" href="{{ url('/login-register') }}"><i class="fas fa-user"></i>
                    Login</a></li>
            <li class="nav-list"><a class="nav-link" href="{{ url('/login-register') }}"><i
                        class="fas fa-sign-in-alt"></i>
                    Sign in</a></li>
            @else
            <li class="nav-list"><a class="nav-link" href="{{ url('/account') }}"><i class="fa fa-user"></i> Account</a>
            </li>
            <li class="nav-list"><a class="nav-link" href="{{ url('/user-logout') }}"><i class="fa fa-sign-out"></i>
                    Logout</a></li>
            @endif
        </ul>
    </nav>

    <!-- BURGER NAVIGATOR -->
    <nav class="burger-nav">
        <ul class="nav-ul-burger">
            <li class="nav-li-burger"><a class="nav-link-burger" href="#projects">Projects</a></li>
            <li class="nav-li-burger"><a class="nav-link-burger" href="#header-intro">Apps</a></li>
            <li class="nav-li-burger"><a class="nav-link-burger" href="#section-ads">Ad Campaigns</a></li>
            <li class="nav-li-burger"><a class="nav-link-burger" href="#contact">Contact</a></li>
        </ul>
        <div class="burger-menu-icon">
            <span class="burger-line1"></span>
            <span class="burger-line2"></span>
        </div>
    </nav>
    <!-- END -- BURGER NAVIGATOR -->

</header>
<!-- End Header -->