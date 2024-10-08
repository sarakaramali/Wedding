$(function () {
    //navnar
    $('.navbar-nav li a').click(function () {
        $(this).addClass('active').parent().siblings().children().removeClass('active')

    });

//slider
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        captions : true,
        useCSS: true,
        pager: false,
        auto: true,
     });
})
// does not work with bootstrap with out root
$(function () {
    $('.navbar-nav li a').click(function () {
        let target = $(this).attr('href');
        let position = $(target).offset();

        // $(document).scrollTop(position.top);

        $('html, body').animate({
            'scrollTop' : position.top + 'px'
        },1000)

        return false;
    });

});
// //timeline

$('#myTimeline').Timeline()

// $('#demo').timeline({
//     startSide: 'left',
//     alternate: true,
//     showDate: true,
//     animate: true
// });

// //timeline
// $('.timeLine').timeLine({
//     mainColor: '#890025',
//     opacity: '0.85',
//     lineColor: '#890025'
// });




//countDown
function makeTimer() {
    var endTime = new Date("01 June 2019 10:45:00 GMT+01:00");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<h6>Days</h6>");
    $("#hours").html(hours + "<h6>Hrs</h6>");
    $("#minutes").html(minutes + "<h6>Min</h6>");
    $("#seconds").html(seconds + "<h6>Sec</h6>");
}
setInterval(function() { makeTimer(); }, 1000);

<!-- Display the countdown timer in an element -->
// <p id="demo"></p>

// <script>
    // Set the date we're counting down to
//     var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
//
//     // Update the count down every 1 second
//     var x = setInterval(function() {
//
//     // Get today's date and time
//     var now = new Date().getTime();
//
//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;
//
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//     // Display the result in the element with id="demo"
//     document.getElementById("demo").innerHTML = days + "days " + hours + "hours "
//     + minutes + "minutes " + seconds + "seconds ";
//
//     // If the count down is finished, write some text
//     if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
// }
// }, 1000);
// // </script>

// document.addEventListener('DOMContentLoaded', () => {
//
//      var twoDaysFromNow = (new Date().getTime() / 1000) + 30*(86400 * 1) + 1;
//      var flipdown = new FlipDown(twoDaysFromNow)
//
//          .start()
//          .ifEnded(() => {
//             console.log('The countdown has ended!');
//         });
// });