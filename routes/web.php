<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','LandingPageController@index')->name('landing-page');

// Users Login & Register Page
Route::get('/login-register', 'UsersController@userLoginRegister');
// User Forgot Password
Route::match(['get','post'], 'forgot-password','UsersController@forgotPassword');
// Users Register Form Submit
Route::post('/user-register', 'UsersController@register');
// Confirm Account
Route::get('confirm/{code}','UsersController@confirmAccount');
// Users Login Form Submit
Route::post('/user-login', 'UsersController@login');
// Users Logout
Route::get('/user-logout', 'UsersController@logout');

// Route::group(['middleware'=>['frontlogin']], function(){
//     // Users Account Page
//     Route::match(['get','post'],'account', 'UsersController@account');
//     // Check User Current Password
//     Route::post('/check-user-pwd', 'UsersController@chkUserPassword');
//     // Update User Password
//     Route::post('/update-user-pwd', 'UsersController@updatePassword');
// });


// Backend Admin Dashboard Routes
Route::match(['get', 'post'], '/admin', 'AdminController@login');

Route::group(['middleware'=> ['adminlogin']], function() {
    Route::get('/admin/dashboard', 'AdminController@dashboard');
    Route::get('/admin/settings', 'AdminController@settings');
    Route::get('/admin/check-pwd', 'AdminController@checkPassword');
    Route::match(['get', 'post'], '/admin/update-pwd', 'AdminController@updatePassword');

    // Admin Users Route
    Route::get('/admin/view-users', 'UsersController@viewUsers');
    // Admin Users Charts Route
    Route::get('/admin/view-users-charts', 'UsersController@viewUsersCharts');
    // Admin Users Countries Charts Route
    Route::get('/admin/view-users-countries-charts', 'UsersController@viewUsersCountriesCharts');

    // Admin / Sub-Admins View Route
    Route::get('/admin/view-admins', 'AdminController@viewAdmins');
    // Add Admins / Sub-Admins Route
    Route::match(['get', 'post'], '/admin/add-admin', 'AdminController@addAdmin');
    // Edit Admins / Sub-Admins Route
    Route::match(['get', 'post'], '/admin/edit-admin/{id}', 'AdminController@editAdmin');

    //View Newsletter Subscribers
    Route::get('/admin/view-newsletter-subscribers', 'NewsletterController@viewNewsletterSubscribers');
    // Update Newsletter Status
    Route::get('/admin/update-newsletter-status/{id}/{status}', 'NewsletterController@updateNewsletterStatus');
    // Delete Newsletter Email
    Route::get('/admin/delete-newsletter-email/{id}', 'NewsletterController@deleteNewsletterEmail');
    // Export Newsletter Emails
    Route::get('/admin/export-newsletter-emails', 'NewsletterController@exportNewsletterEmails');
});

Route::get('/logout', 'AdminController@logout');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
