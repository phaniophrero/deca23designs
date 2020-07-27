@extends('layout')

@section('content')

<section id="main-section-content" class="main-container-section">


    @include('include.welcome-section')

    <!-- Google AdSense Space  -->
    {{-- <div class="empty-space-ads">
        <p class="text-adsense">Aici intra Google AdSense.</p>
    </div> --}}
    <!-- END -- Google AdSense Space  -->

    @include('include.projects')

    @include('include.intro')

    @include('include.hosting')


    <!-- Ad Sense Google Section -->
    {{-- <div class="empty-space-ads2">
        <p class="text-adsense2">Aici intra Google AdSense.</p>
    </div> --}}
    <!-- END -- Ad Sense Google Section -->

    @include('include.ads')

    @include('include.price-cards')

    @include('include.llc-business')

    @include('include.managers')

    @include('include.our-team')

    @include('include.contact-form')

    <!--  After deployment Go back and check for Messenger Chat -->
    @include('include.messengerChat')


</section>
<!--END -- Section Main -->

@endsection