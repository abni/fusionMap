fusionMap plugin
==============
- Style maps from fusiontable

###How it works
Create a google fusiontable (<a href="https://support.google.com/fusiontables/answer/184641?hl=en&ref_topic=1652595">read more about fusion table here</a>) and grab the link to the table (Tools > Publish > link) and insert it into the plugin. Style your map as with <a href="http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html">Styled Maps Wizard</a> and grab the JSON feed. Save the JSON and insert the path/URL to your map styles.

### Example
You can see a simple example in the example folder.

Or you can head over here and see a few examples:
<a href="http://www.andersbergmann.dk/fusionmap">See demos and configuration here.</a>


### Configuration
```html

<div id="map"></div>

<!-- Add jQuery -->
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

<!-- Add plugin -->
<script src="../scripts/fusionMap.plugin.js"></script>

<!-- Add Google Maps -->
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>

<script>
$('#map').fusionMap({
    publishedtable: '/path-to-published-table', // Tools > Publish and copy paste in the link
    mapstyles: 'scripts/maps/blackmap.js' // Path to styled map
});
</script>

```

### Styled maps
In /maps you can find sample maps.
<a href="http://snazzymaps.com/">Check out more cool styles for google maps here.</a>