$(document).ready(function () {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    // Smooth scroll

    // Add smooth scrolling to all links
    $("a.smooth").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    new WOW().init();

    window.onscroll = function () {
        scrollFunction()
    };

    scrollFunction()

    $('.slick-slider').slick({
        autoplay: false,
        infinite: true,
        mobileFirst: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false
    });

});

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("scrollTop").style.bottom = "10px";
    } else {
        document.getElementById("scrollTop").style.bottom = "-50px";
    }
}

$('#tabs li').on('click', function () {
    var tab = $(this).data('tab');

    $('#tabs li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#tab-content div.tab-content').removeClass('is-active');
    $('div[data-content="' + tab + '"]').addClass('is-active');
});

// Dropdowns

var $dropdowns = getAll('.dropdown:not(.is-hoverable)');

if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
        $el.addEventListener('click', function (event) {
            event.stopPropagation();
            $el.classList.toggle('is-active');
        });
    });

    document.addEventListener('click', function (event) {
        closeDropdowns();
    });
}

function closeDropdowns() {
    $dropdowns.forEach(function ($el) {
        $el.classList.remove('is-active');
    });
}

// Close dropdowns if ESC pressed
document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
        closeDropdowns();
    }
});

// Functions

function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
}

// League Selection Function

defaultLeagueSelection = () => {
    for (let i = 10; i <= 15; i++) {
        let _temp1 = '#u' + i + '_standing';
        let _temp2 = '#u' + i + '_score';
        $(_temp1).hide();
        $(_temp2).hide();
    }
    $('.selectedLeagueName').html('u10 Boys');
    $('#u10_standing').show();
    $('#u10_score').show();
}

defaultLeagueSelection();

$("#league_select").change(function () {
    for (let i = 10; i <= 15; i++) {
        let _temp1 = '#u' + i + '_standing';
        let _temp2 = '#u' + i + '_score';
        $(_temp1).hide();
        $(_temp2).hide();
    }
    let selectedLeague = $(this).val();
    let selectedLeagueId1 = '#' + selectedLeague + '_standing';
    let selectedLeagueId2 = '#' + selectedLeague + '_score';
    $(selectedLeagueId1).show();
    $(selectedLeagueId2).show();
    $('.selectedLeagueName').html(selectedLeague + ' Boys');

    // if(selectedLeague == 'u14' || selectedLeague == 'u15'){
    //     $('#optionalTeam1').hide();
    //     $('#optionalTeam2').hide();
    // }else{
    //     $('#optionalTeam1').show();
    //     $('#optionalTeam2').show();
    // }
})

function subToggle(item, id) {
    $('.teamSub').removeClass('show')
    $('#' + item).addClass('show')
    $('.detailsList').removeClass('show')
    $('.detailsList').addClass('hide')
    $('#' + id).removeClass('hide')
    $('#' + id).addClass('show')
}

function toggle(item, id, imageId) {
    $('.teamlistHead').removeClass('show')
    $('#' + item).addClass('show')
    $('.teamlist').removeClass('show')
    $('.teamlist').addClass('hide')
    $('#' + id).removeClass('hide')
    $('#' + id).addClass('show')
    $('#' + imageId).removeClass('hide')
    $('#' + imageId).addClass('show')
}

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar-lower");

// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// sticky menu

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
        $(".navbar-fixed").addClass("sticky-2");
    } else {
        $(".navbar-fixed").removeClass("sticky-2");
    }
});

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
        $(".navbar-lower").addClass("sticky");
    } else {
        $(".navbar-lower").removeClass("sticky");
    }
});

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
        $(".fixed-top").addClass("sticky-1");
    } else {
        $(".fixed-top").removeClass("sticky-1");
    }
});

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
        $(".fixed-nav").addClass("sticky-2");
    } else {
        $(".fixed-nav").removeClass("sticky-2");
    }
});



// DROP-DOWN

$(window).on('resize load', function () {
    console.log('hei');
    if ($(window).width() <= 992) {
        console.log('992');
        $(".dropbtn").on("click", function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.navbar-dropdown').slideUp();
            } else {
                $(this).addClass('active');
                $('.navbar-dropdown').slideDown();
            }
        });
    }

})





