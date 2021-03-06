 
 
 $(window).scroll(function () { 
    //alert('hello');
   $('.home-banner').css({
      'top' : +($(this).scrollTop()/1.5)+"px"
   }); 
   
   var headerHeight = $('.menu').height();
    var height = $(window).scrollTop() + 150;
    var screenHeight = $( window ).height();
    if(height  > screenHeight) {
       // alert('done it');
       $(".header-menu").addClass("header-color");
       $(".brand-logo").addClass("brand-logo-anime");
//       $('.brand-logo-anime').css({
//            'height' : headerHeight + "px"
//        });
    } else if ( height  < screenHeight ){
        $(".header-menu").removeClass("header-color");
        $(".brand-logo").removeClass("brand-logo-anime");
    }
});

$(document).ready(function () {



    var screenHeight = $( window ).height();
    //alert (screenHeight);
    $('.home-banner, .home').css({
        'height' : screenHeight + "px"
    });
    
    
    
    
    /* Menu Item Slide */
    
    $(function(){
        $.scrollIt({
            topOffset: -62
        });
    });

    /* Back to top Fixing */

    var screenWidth = $( window ).width();
    var containerWidth = $( ".container" ).width();
    var backtoWidth = $( ".back-to-top" ).width();
    var x = screenWidth - containerWidth;
    var y = x/2;
    var z = y - backtoWidth - 10;
    $( ".back-to-top" ).css({
        right: +z+'px'
    });
    /* To slide menu */
    var slideR = 0;
    $('.plus-icon').on('click', function () {

        if (slideR == 0) {
            $('.menu-items').css("display", "block");
            $('.plus-sign').hide();
            $('.minus-sign').show();
            $('.menu-items').animate({
                right: '67px',
                width: '93%'
            });
            slideR = 1;
        } else if (slideR == 1) {
            $('.minus-sign').hide();
            $('.plus-sign').show();
            $('.menu-items').animate({
                right: '57px', 
                width: '0'
            }, function () {
                $('.menu-items').css("display", "none");
            });
            slideR = 0;
        }
    });

    /* Tabs */
    $('.portfolio-nav').on('click', function () {

        $('.portfolio-nav').removeClass('nav-selected');
        $(this).addClass('nav-selected');

        var panel_to_show = $(this).attr('data-name');
        $('.panels').hide();
        $('.' + panel_to_show).show();
    });

    /* Function for photography pop up and slide */
    //	Add a custom filter to recognize images from lorempixel (that don't end with ".jpg" or something similar)
//    $.tosrus.defaults.media.image = {
//        filterAnchors: function( $anchor ) {
//            return $anchor.attr( 'href' ).indexOf( 'lorempixel.com' ) > -1;
//        }
//    };


    //google.maps.event.addDomListener(window, 'load', initialize);
    /* Initialize Google maps */
    initialize();
});
/* google map  */
var marker;
var map;

function initialize() {

    var mapProp = {
        //center:new google.maps.LatLng(22.528610, 88.365451), //bangalore
        zoom: 14,
        mapTypeControl: false,
        //scaleControl: false,
        panControl: false,
        streetViewControl: false,
        zoomControl: false,
        //navigationControl: false,
        styles: [
        {
            "stylers": [
            {
                "hue": "#ff1a00"
            },
            {
                "invert_lightness": true
            },
            {
                "saturation": -100
            },
            {
                "lightness": 33
            },
            {
                "gamma": 0.5
            }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
            {
                "color": "#2D333C"
            }
            ]
        }
        ]
    };

    map = new google.maps.Map(document.getElementById("map"), mapProp);

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(12.857041, 74.860016),
        animation: google.maps.Animation.DROP,
        mapTypeControl: false
    });

    marker.setMap(map);
    map.panTo(marker.position);

    google.maps.event.addListener(marker, "click", function () {

        });

}

function changeMarkerPos(lat, lon) {
    myLatLng = new google.maps.LatLng(lat, lon)
    marker.setPosition(myLatLng);
    map.panTo(myLatLng);
}

// For Demo purposes only (show hover effect on mobile devices)
//[].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
//    el.addEventListener( 'click', function(ev) {
//        ev.preventDefault();
//    } );
//} );



