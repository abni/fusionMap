fusionMap plugin
==============
## Easy styling of fusiontables map

###How it works
Create a google fusiontable (<a href="https://support.google.com/fusiontables/answer/184641?hl=en&ref_topic=1652595">read more about fusion table here</a>) and grab the ID of the table and insert it into the plugin. Style your map as with <a href="http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html">Styled Maps Wizard</a> and grab the JSON feed. Save the JSON and insert the path/URL to your map styles.


### Configuration
```html

<div id="map-canvas"></div>

<script type="text/javascript" src="path_to_js/your-map-styles.js"></script>
<script type="text/javascript" src="path_to_js/fusionMap.plugin.js"></script>

<script>
$('#map-canvas').fusionMap({
    tableid: '1z9AvHOsudqI9MWBSZ16h_vqQXbM7TXhv7XoLA4w', // Table id
    mapstyles: 'scripts/maps/greymap.js', // path to map styles
    lat: 56.2, // Latitude
    lng: 10.4, // Longitude
    zoom: 6 // Zoomlevel. Values: 1 - 12
});
</script>

```

<a href="www.andersbergmann.dk/fusionmap">See demos and configuration here.</a>

In /maps you can find sample maps.