//add map centered on center of watershed
var map = L.map('map', {
				 center: [33.518778, -98.15738],
				 zoom: 6.5
			});

//create icon for river gages with options for green, yellow, and orange
var dotIcon = L.Icon.extend({
    				options: {
        				iconSize:     [14, 14],
        				iconAnchor:   [0, 0],
       					popupAnchor:  [0, -30]
    				}
			});
			var orangedot = new dotIcon({iconUrl: 'img/orange_dot.png'})
			var reddot = new dotIcon({iconUrl: 'img/red_dot.png'})
			var greendot = new dotIcon({iconUrl: 'img/green_dot.png'})
			
//create global childress variable and retrieve information, assign it to childress   		
var childress;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07299540&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        ctx = (data.value.timeSeries[0].values[0].value[0].value);
        childress = Number(ctx);
    }
    });

//create childress geojson
var childressgeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -100.1963707590198, 
          34.566576613097574
        ],
        "type": "Point"
      }
    }
  ]
};

//add childress geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(childressgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (childress >= 14) return L.marker(latlng, {icon:reddot});
	    	else if (childress >= 10 && childress < 14) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Prairie Dog Town Fork of the Red River near Childress, TX</p><br><h6>Current height: </h6><p>' + childress + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Prairie-Dog-Town-Fork-Childress.html" target="_blank" rel="noopener noreferrer"><img src= "img/Childress.PNG"</a>', {maxWidth: "200px"}).addTo(map);
			
//create global wayside variable and retrieve information, assign it to wayside	
var wayside;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07297910&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        wtx = (data.value.timeSeries[0].values[0].value[0].value);
        wayside = Number(wtx);
    }
    });

//create wayside geojson
var waysidegeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -101.4140578, 
          34.83755505
        ],
        "type": "Point"
      }
    }
  ]
};

//add wayside geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(waysidegeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (wayside >= 15) return L.marker(latlng, {icon:reddot});
	    	else if (wayside >= 10 && wayside < 15) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Prairie Dog Town Fork of the Red River near Wayside, TX</p><br><h6>Current height: </h6><p>' + wayside + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Prairie-Dog-Town-Fork-Wayside.html" target="_blank" rel="noopener noreferrer"><img src= "img/Wayside.PNG"</a>', {maxWidth: "200px"}).addTo(map);
			
//create global burk variable and retrieve information, assign it to burk
var burk;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07308500&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        btx = (data.value.timeSeries[0].values[0].value[0].value);
        burk = Number(btx);
    }
    });

//create burk geojson
var burkgeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -98.5317234, 
          34.11009327
        ],
        "type": "Point"
      }
    }
  ]
};

//add burk geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(burkgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (burk >= 12) return L.marker(latlng, {icon:reddot});
	    	else if (burk >= 9 && burk < 12) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Red River near Burkburnett, TX</p><br><h6>Current height: </h6><p>' + burk + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Burkburnett.html" target="_blank" rel="noopener noreferrer"><img src= "img/Burkburnett.PNG"</a>', {maxWidth: "200px"}).addTo(map);
			
//create global gaines variable and retrieve information, assign it to gaines
var gaines;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07316000&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        gtx = (data.value.timeSeries[0].values[0].value[0].value);
        gaines = Number(gtx);
    }
    });

//create gaines geojson
var gainesgeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -97.1600129, 
          33.7278833
        ],
        "type": "Point"
      }
    }
  ]
};

//add gaines geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(gainesgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (gaines >= 28) return L.marker(latlng, {icon:reddot});
	    	else if (gaines >= 25 && gaines < 28) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
}).bindPopup('<h6>Station Name:</h6><br><p>Red River near Gainesville, TX</p><br><h6>Current height: </h6><p>' + gaines + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Gainesville.html" target="_blank" rel="noopener noreferrer"><img src= "img/Gainesville.PNG"</a>', {maxWidth: "200px"}).addTo(map);
			
//create global dickson variable and retrieve information, assign it to dickson
var dickson;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07331000&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        dok = (data.value.timeSeries[0].values[0].value[0].value);
        dickson = Number(dok);
    }
    });

//create dickson geojson
var dicksongeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -96.9758447, 
          34.23342725
        ],
        "type": "Point"
      }
    }
  ]
};

//add dickson geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(dicksongeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (dickson >= 29) return L.marker(latlng, {icon:reddot});
	    	else if (dickson >= 27 && dickson < 29) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Washita River near Dickson, OK</p><br><h6>Current height: </h6><p>' + dickson + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Washita-River-Dickson.html" target="_blank" rel="noopener noreferrer"><img src= "img/Dickson.PNG"</a>', {maxWidth: "200px"}).addTo(map);
			
//create global indar variable and retrieve information, assign it to indar
var indar;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07337000&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        iar = (data.value.timeSeries[0].values[0].value[0].value);
        indar = Number(iar);
    }
    });

//create indar geojson
var indargeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -94.0411111, 
          33.55194444
        ],
        "type": "Point"
      }
    }
  ]
};

//add indar geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(indargeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (indar >= 26) return L.marker(latlng, {icon:reddot});
	    	else if (indar >= 25 && indar < 26) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Red River at Index, AR</p><br><h6>Current height: </h6><p>' + indar + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Index.html" target="_blank" rel="noopener noreferrer"><img src= "img/Index.PNG"</a>', {maxWidth: "200px"}).addTo(map);
			
//create global shreveport variable and retrieve information, assign it to shreveport	
var shreveport;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07348500&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        sla = (data.value.timeSeries[0].values[0].value[0].value);
        shreveport = Number(sla);
    }
    });

//create shreveport geojson
var shreveportgeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -93.7404565, 
          32.5154297
        ],
        "type": "Point"
      }
    }
  ]
};

//add shreveport geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(shreveportgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (shreveport >= 31.5) return L.marker(latlng, {icon:reddot});
	    	else if (shreveport >= 30 && shreveport < 31.5) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Red River at Shreveport, LA</p><br><h6>Current height: </h6><p>' + shreveport + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Shreveport.html" target="_blank" rel="noopener noreferrer"><img src= "img/Shreveport.PNG"</a>', {maxWidth: "200px"}).addTo(map);
			
//create global coush variable and retrieve information, assign it to coush	
var coush;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07350500&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        cla = (data.value.timeSeries[0].values[0].value[0].value);
        coush = Number(cla);
    }
    });

//create coush geojson
var coushgeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -93.3529502, 
          32.01266134
        ],
        "type": "Point"
      }
    }
  ]
};

//add coush geojson to map with flood stage cutoffs using different icons and a popup containing the information	   
L.geoJSON(coushgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (coush >= 33) return L.marker(latlng, {icon:reddot});
	    	else if (coush >= 31 && coush < 33) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Red River at Coushatta, LA</p><br><h6>Current height: </h6><p>' + coush + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Coushatta.html" target="_blank" rel="noopener noreferrer"><img src= "img/Coushatta.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create and define rivers display properties
var riverStyle = {
        "color": "#A6D4FF",
        "weight": 2,
        "opacity": 0.65
    };

//create rivers geojson with styling and add to map
var rivers = new L.geoJson( '', {
	style: riverStyle});
rivers.addTo(map);

//define rivers geojson data from file
$.ajax({
dataType: "json",
url: "data/Rivers.geojson",
success: function(data) {
    $(data.features).each(function(key, data) {
        rivers.addData(data);
    });
}
}).error(function() {});

//create and define watershed display properties
var watershedstyle = {
	"color": "#C4A484",
    	"weight": 1,
    	"opacity": 0.95
	};

//create watershed geojson with styling and add to map
var watershed =  new L.geoJson( '' , {
	style: watershedstyle});
watershed.addTo(map);

//define watershed geojson from file
$.ajax({
	dataType: "json",
	url: "data/RRWB.geojson",
	success: function(data) {
		$(data.features).each(function(key, data) {
			watershed.addData(data);
			});
		}
}).error(function() {});

//add openstreetmaps tile layer to map
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    				maxZoom: 13,
   				attribution: '© OpenStreetMap'}).addTo(map);

//create legend control
var legend = L.control({ position: "bottomleft" });

//define legend properties on add
legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h5><b>Stage</b></h5>";
  div.innerHTML += '<i class="icon1"></i><span>Normal Conditions</span><br>';
  div.innerHTML += '<i class="icon2"></i><span>Minor Flooding</span><br>';
  div.innerHTML += '<i class="icon3"></i><span>Moderate Flooding</span>';
 
  return div;
};

//add legend to map
legend.addTo(map);
