$(function () {

    var delay = 0, setTimeoutConst;
    $('.site-navigation:not(.onclick) .navbar-nav>li.dropdown, .site-navigation:not(.onclick) li.dropdown>ul>li.dropdown').hover(
        function () {
            var $this = $(this);
            setTimeoutConst = setTimeout(function () {
                $this.addClass('open').slideDown();
                $this.find('.dropdown-toggle').addClass('disabled');
            }, delay);

        }, function () {
            clearTimeout(setTimeoutConst);
            $(this).removeClass('open');
            $(this).find('.dropdown-toggle').removeClass('disabled');
        });

    // Slicknav menu
    $('.navbar-nav').slicknav({
        allowParentLinks: true,
        label: "",
        appendTo: "#masthead",
        closedSymbol: '<i class="fa fa-caret-down" aria-hidden="true"></i>',
        openedSymbol: '<i class="fa fa-caret-up" aria-hidden="true"></i>'
    });

    // menu click event
    $('.slicknav_btn').click(function () {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.slicknav_menu').addClass('act');
        } else {
            $('.slicknav_menu').removeClass('act');
        }
    });

}());