/*

In this lab you will be using Handlebars templates to render a list of CitiBike stations

Instructions

1. Create a <script> tag in `index.html` that will contain the Handlebars template:

<script id="station-template" type="text/x-handlebars-template">

</script> DONE

2. Inside of this template, use the Handlebars `each` helper to loop over an array of stations:

{{#each this}}

{{/each}} DONE

3. Inside of this `each` helper, add the following template:

<div class="station">
  <div class="station-title">{{name}}</div>
  <div class="station-data">
    <div class="station-bikes">Bikes free: {{bikes}}</div>
    <div class="station-spaces">Spaces free: {{free}}</div>
  </div>
</div> DONE

4. Having made the Handlebars template, we now need to pass data to it.
The rest of the instructions will take place inside of the renderCitiBikeStations function, below.

5. First, we need to grab the template's HTML using jQuery:

var source = $('#station-template').html() DONE

6. We then need to compile this template using Handlebars's `compile` function:

var template = Handlebars.compile(source) DONE

7. Having compiled the template, we now need to pass the `stations` data to it:

var stationsTemplate = template(stations) DONE

8. Lastly, having created a template with data, we need to append it into the DOM:

$('#stations').append(stationsTemplate) DONE

*/

function renderCitiBikeStations(stations) {
  // CODE HERE!
  var source = $('#station-template').html()
  var template = Handlebars.compile(source)
  var stationsTemplate = template(stations)
  $('#stations').append(stationsTemplate)
}


// AJAX request to fetch the station data from CitiBike's API
// Warning! Do not break this :D
$.ajax({
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  success: renderCitiBikeStations,
});

