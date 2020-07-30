// Date of Birth datepicker
$(function () {
    $("#birth_date").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+0",
        beforeShow: function (textbox, instance) {
            instance.dpDiv.css({
                marginTop: -259,
            });
        }
    });
});

// Change login/register form view with AJAX
var login_act = document.getElementById("login-auth"),
    register_act = document.getElementById("register-auth");

var actions = [login_act, register_act];

function show(index) {
    for (var i = 0; i < actions.length; i++) {
        if (i !== index) {
            actions[i].style.display = 'none';
        } else {
            actions[i].style.display = 'block';
        }
    }
}
show(0);

var login = document.getElementById("login-link"),
    register = document.getElementById("register-link");

var buttons = [login, register];

buttons[0].addEventListener('click', function () {
    show(0)
}, false);
buttons[1].addEventListener('click', function () {
    show(1)
}, false);


// change background on click
$('.login-action-btn').click(function () {
    $('.register-action-btn').removeClass('register-bg-active');
    $(this).addClass('login-bg-active');
});
$('.register-action-btn').click(function () {
    $('.login-action-btn').removeClass('login-bg-active');
    $(this).addClass('register-bg-active');
});
