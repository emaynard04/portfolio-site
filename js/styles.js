/*<!-- Image Change on Home Script -->*/
    $(document).ready(function() {
        $('#infoAlt1').click(function() {
            $('#infoMain').attr('src', 'images/personalPhoto1.jpg');
        });
        $('#infoAlt2').click(function() {
            $('#infoMain').attr('src', 'images/personalPhoto2.jpg');
        });
        $('#infoAlt3').click(function() {
            $('#infoMain').attr('src', 'images/personalPhoto3.jpg');
        });
        $('#infoAlt4').click(function() {
            $('#infoMain').attr('src', 'images/personalPhoto4.jpg');
        });
    });

/*<!--SLICK SLIDER -->*/
<script type="text/javascript">
    $(document).ready(function() {
        $('.single_item').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            infinite: true,
            dots: true,
            nextArrow: '<i class="fa fa-angle-right fa-3x" id="slick-next"</i>',
            prevArrow: '<i class="fa fa-angle-left fa-3x" id="slick-prev"</i>',
        });
    });
</script>

/*<!-- Vimeo Player -->*/
<script src="https://player.vimeo.com/api/player.js"></script>
<script>
    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player('#vimeo1', '#vimeo2', '#vimeo3', '#vimeo4');

    player.on('play', function() {
        console.log('played the video!');
    });
    player.setAutopause(true).then(function(autopause) {
        // autopause was turned off
    }).catch(function(error) {
        // an error occurred
    });

    player.pause().then(function() {
        // the video was paused
    }).catch(function(error) {
        switch (error.name) {
            case 'PasswordError':
                // the video is password-protected and the viewer needs to enter the
                // password first
                break;

            case 'PrivacyError':
                // the video is private
                break;

            default:
                // some other error occurred
                break;
        }
    });
</script>
