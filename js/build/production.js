equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

jQuery(window).load(function() {
  equalheight('.book-col');
});


jQuery(window).resize(function(){
  equalheight('.book-col');
});





jQuery(document).ready(function($) {

   $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
    




var pracId = $('.buttonMenu');



 $('.files').change(function() {
        var val = $(this).val();
        var practices = $('.files');
        pracId.attr('id', val);
      	practices.val(val);
   
    });



$('a.show').click(

	function(e) {
		e.preventDefault();
		$(this).toggleClass('minus');

		$(this).next().fadeToggle();
		
	
	});



});



//GOOGLE MAPS



        var json = [
            {
                "title": "Parramatta NSW",
                "lat": -33.81339,
                "lng": 151.00324,
                "description": "Level 2 / 239 Church St, Parramatta NSW 2150, <br/>((02) 9689 3244)"
            },
            {
                "title": "Rouse Hill NSW",
                "lat": -33.68325,
                "lng": 150.91707,
                "description": "Suite 6/40 Panmure Street, Rouse Hill, NSW 2155 <br/>((02) 8824 7911)"
            },
            {
                "title": "Windsor NSW",
                "lat": -33.60728,
                "lng": 150.82102,
                "description": "30 Fitzgerald St, Windsor NSW 2756 <br/>((02) 4577 3666)"
            },
            {
                "title": "Wollongong NSW",
                "lat": -34.42459,
                "lng": 150.89424,
                "description": "74/200 Crown Street, Wollongong NSW 2500 <br/>((02) 4225 1367)"
            },
            {
                "title": "Wyong NSW",
                "lat": -33.28711,
                "lng": 151.42406,
                "description": "18-20 Pacific Hwy, Wyong NSW 2259 <br/>((02) 4357 9500)"
            },
            {
                "title": "Ballina NSW",
                "lat": -28.86896,
                "lng": 153.55939,
                "description": "<b>Northern Rivers Clinic</b> <br/>3/90 Tamar Street, Ballina NSW 2478 <br/>((02) 6686 8799)"
            },
            {
                "title": "Bowral NSW",
                "lat": -34.47557,
                "lng": 150.41917,
                "description": "190 Bong Bong Road, Bowral NSW 2576 <br/>((02) 4861 2977)"
            },
            {
                "title": "Frenchs Forest NSW",
                "lat": -33.74866,
                "lng": 151.22373,
                "description": "28 Forest Way, Frenchs Forest NSW 2806 <br/>((02) 9453 5768)"
            },
            {
                "title": "Gosford NSW",
                "lat": -33.42405,
                "lng": 151.34245,
                "description": "213 Mann Street, Gosford NSW 2250 <br/>((02) 4324 9977)"
            },
            {
                "title": "Hornsby NSW",
                "lat": -33.70323,
                "lng": 151.10026,
                "description": "Suite 13, The Madison, 25-29 Hunter St Hornsby NSW 2077 <br/>((02) 9482 5400)"
            },
            {
                "title": "Newcastle NSW",
                "lat": -32.92718,
                "lng": 151.78308,
                "description": "14 Bolton Street, Newcastle NSW 2300 <br/>((02) 4925 2461)"
            },
            {
                "title": "Ryde NSW",
                "lat": -33.78747,
                "lng": 151.12497,
                "description": "124A Epping Rd, North Ryde NSW 2113 <br/>((02) 9878 8555)"
            },
            {
                "title": "Orange NSW",
                "lat": -33.27820,
                "lng": 149.10021,
                "description": "286 Anson St, Orange NSW 2800 <br/>((02) 6362 9004)"
            },
            {
                "title": "Bondi NSW QLD",
                "lat": -33.89175,
                "lng": 151.24588,
                "description": "4B 79/85 Oxford Street, Bondi Junction NSW 2022 <br/>((02)9387-7546)"
            },
            {
                "title": "Minyama QLD (Solar Derm)",
                "lat": -26.70031,
                "lng": 153.12459,
                "description": "<b>Medical & Diagnostic Centre,</b> <br/>Suite 3 – 7 Nicklin Way, Minyama, 4575 <br/>((07) 5478 4499)"
            },
            {
                "title": "Pialba QLD (Solar Derm)",
                "lat": -25.28513,
                "lng": 152.83366,
                "description": "<b>The Liuzzi Chambers,</b> <br/>5/14 Liuzzi Street, Pialba. Qld. 4655 <br/>((07) 4194 1125)"
            },
            {
                "title": "Nambour QLD (Solar Derm)",
                "lat": -26.62602,
                "lng": 152.95821,
                "description": "Shop 50 Centenary Square, 52 Currie St Nambour, QLD 4560 <br/>((07) 5441 6666)"
            },
            {
                "title": "Gympie QLD (Solar Derm)",
                "lat": -26.18687,
                "lng": 152.66155,
                "description": "Suite 6/84 Monkland St, Gympie QLD 4570 <br/>((07) 5482 8222)"
            },
            {
                "title": "Kallangur QLD (Solar Derm)",
                "lat": -27.25021,
                "lng": 152.99409,
                "description": "Shop 2, 1420 Anzac Avenue, Kallangur QLD 4503 <br/>((07) 3491 6077)"
            },
            {
                "title": "Caboolture  QLD (Solar Derm)",
                "lat": -27.08197,
                "lng": 152.94985,
                "description": "Suite 1, 12 Annie Street, Caboolture QLD 4510 <br/>((07) 5428 0933)"
            }
        ]

var myCenter=new google.maps.LatLng(-26.62602,152.95821);

function initialize()
{
    var mapProp = {
        center:myCenter,
        zoom:5,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var infowindow =  new google.maps.InfoWindow({
        content: ""
    });

    for (var i = 0, length = json.length; i < length; i++) {
        var data=json[i];
        var latLng = new google.maps.LatLng(data.lat, data.lng); 
        // Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: data.title
        });

        bindInfoWindow(marker, map, infowindow, data.description);
    } 
}

function bindInfoWindow(marker, map, infowindow, strDescription) {
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(strDescription);
        infowindow.open(map, marker);
    });
}
 google.maps.event.addDomListener(window, 'load', initialize);