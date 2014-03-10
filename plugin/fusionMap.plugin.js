'use strict';
// Utility
if ( typeof Object.create !== 'function' ) {
    Object.create = function( obj ) {
        function F() {}
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

            self.parseUrl(self.options.publishedtable);

            self.getMapStyle().done(function(result){
                self.createMap(result);
            });
        },

        parseUrl: function(url){
            var lat = url.match(/lat=(\d*).(\d*)/);
            this.options.lat = lat[1] + '.' + lat[2];

            var lng = url.match(/lng=(\d*).(\d*)/);
            this.options.lng = lng[1] + '.' + lng[2];

            var styledId = url.match(/y=(\d*)/);
            this.options.styledId = parseInt(styledId[1]);

            var templateId = url.match(/tmplt=(\d*)/);
            this.options.templateId = parseInt(templateId[1]);

            var zoom = url.match(/&z=(\d*)/);
            this.options.zoom = parseInt(zoom[1]);

            var column = url.match(/col+(\d*)/);
            this.options.column = 'col'+column[1];

            var tableid = url.match(/from\+(.+)&viz/);
            this.options.tableid = tableid[1];
        },

        getMapStyle: function(){
            return $.getJSON(this.options.mapstyles);
        },

        createMap: function(styledmap) {
            var map = new google.maps.Map(this.el, {
                center: new google.maps.LatLng(this.options.lat, this.options.lng),
                zoom: this.options.zoom
            });

            var styledMap = new google.maps.StyledMapType(styledmap, {
                map: map,
                name: 'Custom map',
            });

            map.mapTypes.set('map_style', styledMap);
            map.setMapTypeId('map_style');

            var layer = new google.maps.FusionTablesLayer({
                query: {
                    select: this.options.column,
                    from: this.options.tableid
                },
                map:map,
                styleId: this.options.styledId,
                templateId: this.options.templateId
            });
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
        publishedtable: 'https://www.google.com/fusiontables/embedviz?q=select+col0+from+1mCeZjguxvzGDqoS3riwHewrmsxkSQ7iqrHyyMPw&viz=MAP&h=false&lat=55.67815898330595&lng=12.573343990185549&t=1&z=11&l=col0&y=2&tmplt=2&hml=GEOCODABLE',
        mapstyles: 'scripts/maps/greymap.js',
    };

})( $, window, document);