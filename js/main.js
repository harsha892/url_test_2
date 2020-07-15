


// Mobile Navigation
function togNav() {
    var nav = document.getElementById("sidenav");
    if (nav.style.width == '100vw') {
        nav.style.width = '0';
        nav.style.opacity = 0;
        $("#header").removeClass("-opened");
    } else {
        nav.style.width = "100vw";
        nav.style.opacity = 1;
        $("#header").addClass("-opened");
    }
}


//Show Menu on Scroll
var topBlock = $("#topBlock").offset().top;
$("#header").addClass("on-scroll");
// $(window).scroll(function() {
//   	if ( ($(window).scrollTop() > topBlock) )  {
//       $("#header").addClass("on-scroll");
//   	} else {
//       $("#header").removeClass("on-scroll");
//   	}
//   });



// counter


var data = {}
// user_counts()

function user_counts() {
    $.get("https://devapi.tsdeet.com/admin/webReport_Ver1",
        function (result) {
            data = result.data;
            $('.count').each(function () {
                const prop = $(this).data("pro");
                $(this).prop('Counter', 0).animate({
                    Counter: data[prop]
                }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

        })
}