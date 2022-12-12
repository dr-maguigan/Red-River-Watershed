var map = L.map('map', {
				 center: [33.518778, -98.15738],
				 zoom: 6.5
			});
			
var dotIcon = L.Icon.extend({
    				options: {
        				iconSize:     [14, 14],
        				iconAnchor:   [0, 0],
       					popupAnchor:  [0, 80]
    				}
			});
			var orangedot = new dotIcon({iconUrl: 'img/orange_dot.png'})
			var reddot = new dotIcon({iconUrl: 'img/red_dot.png'})
			var greendot = new dotIcon({iconUrl: 'img/green_dot.png'})			
    		
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
	   
L.geoJSON(childressgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (childress >= 14) return L.marker(latlng, {icon:reddot});
	    	else if (childress >= 10 && childress < 14) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
}).bindPopup('<h6>Station Name:</h6><br><p>Prairie Dog Town Fork of the Red River near Childress, TX</p><br><h6>Current height: </h6><p>' + childress + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Prairie-Dog-Town-Fork-Childress.html"><img src= "img/Childress.PNG"</a>', {maxWidth: "200px"}).addTo(map);
	
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
	   
L.geoJSON(waysidegeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (wayside >= 15) return L.marker(latlng, {icon:reddot});
	    	else if (wayside >= 10 && wayside < 15) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
}).bindPopup('<h6>Station Name:</h6><br><p>Prairie Dog Town Fork of the Red River near Wayside, TX</p><br><h6>Current height: </h6><p>' + wayside + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Prairie-Dog-Town-Fork-Wayside.html"><img src= "img/Wayside.PNG"</a>', {maxWidth: "200px"}).addTo(map);

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
	   
L.geoJSON(burkgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (burk >= 12) return L.marker(latlng, {icon:reddot});
	    	else if (burk >= 9 && burk < 12) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
}).bindPopup('<h6>Station Name:</h6><br><p>Red River near Burkburnett, TX</p><br><h6>Current height: </h6><p>' + burk + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Burkburnett.html"><img src= "img/Childress.PNG"</a>', {maxWidth: "200px"}).addTo(map);

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
	   
L.geoJSON(gainesgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (gaines >= 28) return L.marker(latlng, {icon:reddot});
	    	else if (gaines >= 25 && gaines < 28) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
}).bindPopup('<h6>Station Name:</h6><br><p>Red River near Gainesville, TX</p><br><h6>Current height: </h6><p>' + gaines + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Gainesville.html"><img src= "img/Gainesville.PNG"</a>', {maxWidth: "200px"}).addTo(map);

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
	   
L.geoJSON(dicksongeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (dickson >= 29) return L.marker(latlng, {icon:reddot});
	    	else if (dickson >= 27 && dickson < 29) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
}).bindPopup('<h6>Station Name:</h6><br><p>Washita River near Dickson, OK</p><br><h6>Current height: </h6><p>' + dickson + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Washita-River-Dickson.html"><img src= "img/Dickson.PNG"</a>', {maxWidth: "200px"}).addTo(map);

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
	   
L.geoJSON(indargeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (indar >= 26) return L.marker(latlng, {icon:reddot});
	    	else if (indar >= 25 && indar < 26) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
}).bindPopup('<h6>Station Name:</h6><br><p>Red River at Index, AR</p><br><h6>Current height: </h6><p>' + indar + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Index.html"><img src= "img/Index.PNG"</a>', {maxWidth: "200px"}).addTo(map);
	
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
	   
L.geoJSON(shreveportgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (shreveport >= 31.5) return L.marker(latlng, {icon:reddot});
	    	else if (shreveport >= 30 && shreveport < 31.5) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
}).bindPopup('<h6>Station Name:</h6><br><p>Red River at Shreveport, LA</p><br><h6>Current height: </h6><p>' + shreveport + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Shreveport.html"><img src= "img/Shreveport.PNG"</a>', {maxWidth: "200px"}).addTo(map);
	
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

var shreveportgeoJSON = {
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
	   
L.geoJSON(coushgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (coush >= 33) return L.marker(latlng, {icon:reddot});
	    	else if (coush >= 31 && coush < 33) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
}).bindPopup('<h6>Station Name:</h6><br><p>Red River at Coushatta, LA</p><br><h6>Current height: </h6><p>' + coush + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Shreveport.html"><img src= "img/Coushatta.PNG"</a>', {maxWidth: "200px"}).addTo(map);
	
var riverStyle = {
        "color": "#A6D4FF",
        "weight": 2,
        "opacity": 0.65
    };

var rivers = new L.geoJson( '', {
	style: riverStyle});
rivers.addTo(map);

$.ajax({
dataType: "json",
url: "data/Rivers.geojson",
success: function(data) {
    $(data.features).each(function(key, data) {
        rivers.addData(data);
    });
}
}).error(function() {});
                	
var watershedstyle = {
	"color": "#C4A484",
    	"weight": 1,
    	"opacity": 0.95
	};
var watershed =  new L.geoJson( '' , {
	style: watershedstyle});
watershed.addTo(map);

$.ajax({
	dataType: "json",
	url: "data/RRWB.geojson",
	success: function(data) {
		$(data.features).each(function(key, data) {
			watershed.addData(data);
			});
		}
}).error(function() {});

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    				maxZoom: 13,
   				attribution: '© OpenStreetMap'}).addTo(map);

var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h5><b>Stage</b></h5>";
  div.innerHTML += '<i class="icon1"></i><span>Normal Conditions</span><br>';
  div.innerHTML += '<i class="icon2"></i><span>Minor Flooding</span><br>';
  div.innerHTML += '<i class="icon3"></i><span>Moderate Flooding</span>';
 
  return div;
};

legend.addTo(map);
