// Utility
if ( typeof Object.create !== 'function' ) {
    Object.create = function( obj ) {
        function F() {};
        F.prototype = obj;
        return new F();
    };
}

(function( $, window, document, undefined){
    var Map = {
        init: function(options, el){
            // jQuery object
            var self = this;

            self.el = el;

            self.options = $.extend( {}, $.fn.fusionMap.options, options );

            self.getMapStyle().done(function(result){
                self.createMap(result);
            });
        },

        getMapStyle: function(){
            return $.getJSON(this.options.mapstyles);
        },

        createMap: function(styledmap) {
            var map = new google.maps.Map(this.el, {
                center: new google.maps.LatLng(this.options.lat, this.options.lng),
                zoom: this.options.zoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            
            // Create a new StyledMapType object, passing it the array of styles,
            // as well as the name to be displayed on the map type control.
            var styledMap = new google.maps.StyledMapType(styledmap, {name: "Custom map"});

            //Associate the styled map with the MapTypeId and set it to display.
            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');

            var layer = new google.maps.FusionTablesLayer({
                query: {
                    select: 'geometry',
                    from: this.options.tableid
                },
                styles: [{
                    polygonOptions: {
                        strokeColor: "#000000",
                        fillColor: "#000000",
                        fillOpacity: 0.3
                    }
                }],
                options: {
                    //TO DO: SupressInfoWindow true/false setting
                    suppressInfoWindows: false
                },
                map:map
            });

            var infoWindow = new google.maps.InfoWindow();

            //TO DO: Choose rows to display
            // google.maps.event.addListener(layer, 'click', function(e) {
            //     infoWindow.setContent(e.row.Borgmester.value);
            //     infoWindow.setPosition(e.latLng);
            //     infoWindow.open(map);
            // });
        }
    };

    // Register plugin
    $.fn.fusionMap = function(options){
        //return each instance of the object
        return this.each(function(){
            var map = Object.create( Map );
            map.init(options, this);
        });
    };

    // Default plugin opitons
    $.fn.fusionMap.options = {
        tableid: '1UeZKhy7LVNA8cm4XPtersd-zxMIjUXuWFTqMHHU',
        mapstyles: 'scripts/maps/greymap.js',
        lat: 56.2,
        lng: 10.4,
        zoom: 6
    };

})( $, window, document);