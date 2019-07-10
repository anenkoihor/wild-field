$('.actors').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {

        0: {
            items: 1,

        },
        850: {
            items: 1,

        }
    }
})
$('.films').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 10,
    responsive: {
        0: {
            items: 3,
            nav: false,
            center: true,

        },
        320: {
            items: 1,
            nav: false,
            center: true,
            stagePadding: 40
        },
        400: {
            items: 1,
            nav: false,
            center: true,
            stagePadding: 100
        },

        850: {
            items: 3,
            nav: true,
        }
    }
})


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "January 01 2018 00:00:00 GMT+0300"; //for Ukraine
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);



$(document).ready(function() {
    $('.trailer1 a').on('click', function(e) {
        e.preventDefault();
        $('.trailer-items iframe').attr('src', $(this).data('video'));
    });

    $("item1").trigger('click');

    $('button.start').on('click', function() {
        $('.vsplblock').css({
            'display': 'block'
        });
    });

    $('button.exit').on('click', function() {
        if ($(this).hasClass('done')) {

            $('.vsplblock').css({
                'display': 'none'
            });
        } else {
            $('.del').empty();
            $('.del').append("<h2>Спасибо за заявку!</h2>");
            $(this).addClass('done');
            $(this).empty();
            $(this).append("Закрити");


        }
    });




});