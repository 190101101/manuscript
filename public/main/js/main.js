$(function() {
    $('.toggle_btn').on('click', function(){
        $('.sidebar').toggleClass('active');
        $('.page_content').toggleClass('active');
        $(window).scrollTop(0, 0);
    });
});
