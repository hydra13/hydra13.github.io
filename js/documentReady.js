$(document).ready(function () {
    $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
    });

    $('.nav-item').hover(
        function () {
            $(this).removeClass('active')
        },
        function () {
            $(this).addClass('active')
        }
    );
});