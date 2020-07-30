@extends('layout-login')
@section('content')

<section id="form" style="margin-top: 20px;">
    <!--form-->
    <div class="container">
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
        <div class="row">
            <div class="col-sm-4 col-sm-offset-1">
                <div class="">
                    <h2 class="heading-update-account">Update Account</h2>
                    <form id="accountForm" name="accountForm" action="{{ url('/account') }}" method="post">
                        {{ csrf_field() }}
                        <input value="{{ $userDetails->name }}" id="name" class="account-input" name="name" type="text"
                            placeholder="Name" />
                        <input value="{{ $userDetails->address }}" id="address" class="account-input" name="address"
                            type="text" placeholder="Address" />
                        <input value="{{ $userDetails->city }}" id="city" class="account-input" name="city" type="text"
                            placeholder="City" />
                        <input value="{{ $userDetails->state }}" id="state" class="account-input" name="state"
                            type="text" placeholder="State" />
                        <select id="country" class="account-input" name="country">
                            <option value="">Select Country</option>
                            @foreach ($countries as $country)
                            <option value="{{ $country->country_name }}" @if($country->country_name ==
                                $userDetails->country) selected @endif >{{ $country->country_name }}</option>
                            @endforeach
                        </select>
                        <input value="{{ $userDetails->zipcode }}" style="margin-top:10px;" id="zipcode"
                            class="account-input" name="zipcode" type="text" placeholder="Zipcode" />
                        <input value="{{ $userDetails->mobile }}" id="mobile" class="account-input" name="mobile"
                            type="text" placeholder="Mobile" />
                        <button type="submit" class="account-btn-update">Update</button>
                    </form>
                </div>
                <div class="account-bottom-line"></div>
            </div>
            <div class="col-sm-1 account-right-line-wrapper">
                <div class="account-right-line"></div>
            </div>
            <div class="col-sm-4">
                <div class="">
                    <h2 class="heading-update-pass">Update Password</h2>
                    <form id="passwordForm" name="passwordForm" action="{{ url('/update-user-pwd') }}" method="post">
                        {{ csrf_field() }}
                        <input type="password" name="current_pwd" id="current_pwd" class="account-input"
                            placeholder="Current Password">
                        <span id="chkPwd"></span>
                        <input type="password" name="new_pwd" id="new_pwd" class="account-input"
                            placeholder="New Password">
                        <input type="password" name="confirm_pwd" id="confirm_pwd" class="account-input"
                            placeholder="Confirm Password">
                        <button type="submit" class="account-btn-update">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
<!--/form-->

@endsection