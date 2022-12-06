var map = L.map('map', {
				 center: [33.518778, -98.15738],
				 zoom: 6.5
			});
			
var dotIcon = L.Icon.extend({
    				options: {
        				iconSize:     [18, 18],
        				iconAnchor:   [0, 0],
       					popupAnchor:  [0, 40]
    				}
			});
			var orangedot = new dotIcon({iconUrl: 'orange_dot.png'})
			var reddot = new dotIcon({iconUrl: 'red_dot.png'})
			var greendot = new dotIcon({iconUrl: 'green_dot.png'})			
    		
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
}).bindPopup('<h6>Station Name:</h6><br><p>Prairie Dog Town Fork of the Red River near Childress, TX</p><br><h6>Current height: </h6><p>' + childress + ' ft<p><br><h6>Historic Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Prairie-Dog-Town-Fork-Childress.html"><img src= "Childress.PNG"</a>', {maxWidth: "200px"}).addTo(map);
	
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
	    	else if (childress >= 10 && childress < 15) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
}).bindPopup('<h6>Station Name:</h6><br><p>Prairie Dog Town Fork of the Red River near Wayside, TX</p><br><h6>Current height: </h6><p>' + wayside + ' ft<p><br><h6>Historic Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Prairie-Dog-Town-Fork-Wayside.html"><img src= "Wayside.PNG"</a>', {maxWidth: "200px"}).addTo(map);
	
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

var shrevportgeoJSON = {
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
}).bindPopup('<h6>Station Name:</h6><br><p>Red River near Shreveport, LA</p><br><h6>Current height: </h6><p>' + shreveport + ' ft<p><br><h6>Historic Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Shreveport.html"><img src= "Shreveport.PNG"</a>', {maxWidth: "200px"}).addTo(map);
	
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
url: "Rivers.geojson",
success: function(data) {
    $(data.features).each(function(key, data) {
        rivers.addData(data);
    });
}
}).error(function() {});
                	
var watershedstyle = {
	"color": "#8a8c89",
    	"weight": 1,
    	"opacity": 0.95
	};
var watershed =  new L.geoJson( '' , {
	style: watershedstyle});
watershed.addTo(map);

$.ajax({
	dataType: "json",
	url: "RRWB.geojson",
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
