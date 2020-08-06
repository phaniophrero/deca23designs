@extends('layout-login')
@section('content')

<section id="" style="margin-top: 20px;">
    <!--form-->
    <div class="container">
        <div class="row">
            @if(Session::has('flash_message_error'))
            <div class="alert alert-danger alert-block">
                <button type="button" class="close" data-dismiss="alert">&#215;</button>
                <strong>{!! session('flash_message_error') !!}</strong>
            </div>
            @endif
            @if(Session::has('flash_message_success'))
            <div class="alert alert-success alert-block">
                <button type="button" class="close" data-dismiss="alert">&#215;</button>
                <strong>{!! session('flash_message_success') !!}</strong>
            </div>
            @endif
            <div class="auth-pages">
                <div class="auth-left-bg">
                    <div id="login-auth" class="auth-left">
                        <!--login form-->
                        <h2 class="login-heading">Login to your account</h2>
                        <form id="loginForm" name="loginForm" action="{{ url('/user-login') }}" method="post">
                            {{ csrf_field() }}
                            <input id="email" name="email" type="email" placeholder="Email Address" required />
                            <input id="password" name="password" type="password" placeholder="Password" required />
                            <div class="login-container">
                                <span class="round">
                                    <input type="checkbox" class="checkbox" id="check">
                                    <label for="check">Remember me</label>
                                </span>
                                <button type="submit" class="auth-button auth-btn-login">Login</button><br>
                            </div>
                            <a href="{{ url('forgot-password') }}" class="forgot-password-link">Forgot Password?</a>
                        </form>
                    </div>

                    <!-- Register Form -->
                    <div id="register-auth" class="auth-right">
                        <!--sign up form-->
                        <h2 class="register-heading">Create an account</h2>
                        <form id="registerForm" name="registerForm" action="{{ url('/user-register') }}" method="post">
                            {{ csrf_field() }}
                            <div class="wrapper-name-date">
                                <input id="name" class="input-regiser-name" name="name" type="name"
                                    placeholder="Full Name" required />
                                <input id="birth_date" class="birth-date" name="birth_date" type="text"
                                    placeholder="mm/dd/yyyy" required />
                            </div>
                            <div class="validation-message js-validation-message"></div>
                            <input id="address" name="address" type="address" placeholder="Address" required />
                            <div class="wrapper-city-country-zipcode">
                                <input id="city" class="input-city" name="city" type="city" placeholder="City"
                                    required />
                                <select id="country" class="input-country" name="country">
                                    <option value="">Select Country</option>
                                    @foreach ($countries as $country)
                                    <option value="{{ $country->country_name }}">{{ $country->country_name }}</option>
                                    @endforeach
                                </select>
                                <input id="zipcode" class="input-zipcode" name="zipcode" type="zipcode"
                                    placeholder="Zipcode" required />
                            </div>
                            <input id="mobile" name="mobile" type="mobile" placeholder="Mobile" required />
                            <input id="email" name="email" type="email" placeholder="Email Address" required />
                            <input id="myPassword" name="password" type="password" placeholder="Password" required />
                            <div class="login-container">
                                <button type="submit" class="auth-button">Sign up</button>
                            </div>
                        </form>
                    </div>

                </div>
                <!--/login form-->

                <div class="auth-right-bg">
                    <div id="actions-container" class="login-actions-container">
                        <li id="login-action" class="loginActions">
                            <a id="login-link" class="login-action-btn login-bg-active">Login</a>
                        </li>
                        <li id="register-action" class="registerActions">
                            <a id="register-link" class="register-action-btn">Register</a>
                        </li>
                    </div>
                    <div class="logo-container-login">
                        {{-- <div class="balta-wrapper">
                            <img class="balta-img" src="{{asset('/images/balta.png')}}" alt="">
                    </div> --}}
                    <div class="fing-print-wrapper">
                        <img class="fing-print-img" src="{{asset('/images/fing-print4.svg')}}" alt="">
                    </div>
                    <div class="logo-auth-container">
                        <h1 class="logo-auth">DeCA23Designs</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
<!--/form-->
@endsection