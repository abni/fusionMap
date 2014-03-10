fusionMap plugin
==============
- Style maps from fusiontable

###How it works
Create a google fusiontable (<a href="https://support.google.com/fusiontables/answer/184641?hl=en&ref_topic=1652595">read more about fusion table here</a>) and grab the link to the table (Tools > Publish > link) and insert it into the plugin. Style your map as with <a href="http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html">Styled Maps Wizard</a> and grab the JSON feed. Save the JSON and insert the path/URL to your map styles.


### Configuration
```html

<div id="map-canvas"></div>

<script type="text/javascript" src="path_to_js/your-map-styles.js"></script>
<script type="text/javascript" src="path_to_js/fusionMap.plugin.js"></script>

<script>
$('#map-canvas').fusionMap({
    publishedtable: '/path-to-published-table', // Tools > Publish and copy paste in the link
    mapstyles: 'scripts/maps/blackmap.js' // Path to styled map
});
</script>

```

<a href="http://www.andersbergmann.dk/fusionmap">See demos and configuration here.</a>

### Styled maps
In /maps you can find sample maps.
<a href="http://snazzymaps.com/">Check out more cool styles for google maps here.</a>