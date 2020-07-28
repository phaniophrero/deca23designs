@extends('layout')
@section('content')

<section id="form" style="margin-top: 20px;">
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
                    <div class="login-form auth-left">
                        <!--login form-->
                        <h2 class="register-heading">Login to your account</h2>
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
                </div>
                <!--/login form-->

                <div class="auth-right-bg">
                    <div class="signup-form auth-right">
                        <!--sign up form-->
                        <h2 class="register-heading2">Create an account</h2>
                        <form id="registerForm" name="registerForm" action="{{ url('/user-register') }}" method="post">
                            {{ csrf_field() }}
                            <input id="name" name="name" type="text" placeholder="Name" required />
                            <input id="email" name="email" type="email" placeholder="Email Address" required />
                            <input id="myPassword" name="password" type="password" placeholder="Password" required />
                            <div class="login-container">
                                <button type="submit" class="auth-button">Sign up</button>
                            </div>
                        </form>
                    </div>
                    <!--/sign up form-->
                </div>
            </div>
        </div>
    </div>
</section>
<!--/form-->

@endsection