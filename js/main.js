//add map centered on center of watershed
var map = L.map('map');

//create bounding points and bound map to those points
var tr = L.latLng(35.04952836642389, -92.28950417754907);
var bl = L.latLng(31.31562208125445, -102.77481382965912);
var bounds = L.latLngBounds(tr, bl);
map.fitBounds(bounds);

//create icon for river gages with options for green, yellow, and orange
var dotIcon = L.Icon.extend({
    				options: {
        				iconSize:     [12, 12],
        				iconAnchor:   [0, 0],
       					popupAnchor:  [0, -30]
    				}
			});
			var orangedot = new dotIcon({iconUrl: 'img/orange_dot.png'})
			var reddot = new dotIcon({iconUrl: 'img/red_dot.png'})
			var greendot = new dotIcon({iconUrl: 'img/green_dot.png'})
			var maroondot = new dotIcon({iconUrl: 'img/maroon_dot.png'})
			var cleardot = new dotIcon([iconUrl: 'img/clear_dot.png'})
			
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
		if (childress = -99999) return L.marker(latlng, {icon:cleardot});
		else if (childress >= 14) return L.marker(latlng, {icon:reddot});
	    	else if (childress >= 10 && childress < 14) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Prairie Dog Town Fork of the Red River near Childress, TX</p><br><h6>Current height: </h6><p>' + childress + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Prairie-Dog-Town-Fork-Childress.html" alt="Childress Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Childress.PNG"</a>', {maxWidth: "200px"}).addTo(map);
			
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
		if (wayside = -99999) return L.marker(latlng, {icon:cleardot});
		else if (wayside >= 15) return L.marker(latlng, {icon:reddot});
	    	else if (wayside >= 10 && wayside < 15) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Prairie Dog Town Fork of the Red River near Wayside, TX</p><br><h6>Current height: </h6><p>' + wayside + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Prairie-Dog-Town-Fork-Wayside.html" alt="Wayside Hydrograph"target="_blank" rel="noopener noreferrer"><img src= "img/Wayside.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create global wellington variable and retrieve information, assign it to wellington	
var wellington;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07300000&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        welltx = (data.value.timeSeries[0].values[0].value[0].value);
        wellington = Number(welltx);
    }
    });

//create wellington geojson
var wellingtongeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -100.220949, 
          34.95755294
        ],
        "type": "Point"
      }
    }
  ]
};

//add wellington geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(wellingtongeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (wellington = -99999) return L.marker(latlng, {icon:cleardot});
		else if (wellington >= 13) return L.marker(latlng, {icon:maroondot});
		else if (wellington >= 10 && wellington < 13) return L.marker(latlng, {icon:reddot});
	    	else if (wellington >= 8 && wellington < 10) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Salt Fork Red River near Wellington, OK</p><br><h6>Current height: </h6><p>' + wellington + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Salt-Fork-Red-River-Wellington.html" alt="Wellington Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Wellington.PNG"</a>', {maxWidth: "200px"}).addTo(map);


//create global carter variable and retrieve information, assign it to carter	
var carter;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07301500&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        cart = (data.value.timeSeries[0].values[0].value[0].value);
        carter = Number(cart);
    }
    });

//create carter geojson
var cartergeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -99.5073128, 
          35.16810838
        ],
        "type": "Point"
      }
    }
  ]
};

//add carter geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(cartergeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (carter = -99999) return L.marker(latlng, {icon:cleardot});
		else if (carter >= 18) return L.marker(latlng, {icon:maroondot});
		else if (carter >= 17 && carter < 18) return L.marker(latlng, {icon:reddot});
	    	else if (carter >= 16 && carter < 17) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>North Fork Red River near Carter, OK</p><br><h6>Current height: </h6><p>' + carter + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/North-Fork-Red-River-Carter.html" alt="Carter Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Carter.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create global vernon variable and retrieve information, assign it to vernon	
var vernon;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07308200&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        vern = (data.value.timeSeries[0].values[0].value[0].value);
        vernon = Number(vern);
    }
    });

//create vernon geojson
var vernongeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -99.3233333, 
          34.1795833
        ],
        "type": "Point"
      }
    }
  ]
};

//add vernon geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(vernongeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (vernon = -99999) return L.marker(latlng, {icon:cleardot});
		else if (vernon >= 19) return L.marker(latlng, {icon:maroondot});
		else if (vernon >= 17 && vernon < 19) return L.marker(latlng, {icon:reddot});
	    	else if (vernon >= 15 && vernon < 17) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Pease River near Vernon, TX</p><br><h6>Current height: </h6><p>' + vernon + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Pease-River-Vernon.html" alt="Vernon Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Vernon.PNG"</a>', {maxWidth: "200px"}).addTo(map);
			
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
		if (burk = -99999) return L.marker(latlng, {icon:cleardot});
		else if (burk >= 12) return L.marker(latlng, {icon:reddot});
	    	else if (burk >= 9 && burk < 12) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Red River near Burkburnett, TX</p><br><h6>Current height: </h6><p>' + burk + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Burkburnett.html" alt="Burkburnett Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Burkburnett.PNG"</a>', {maxWidth: "200px"}).addTo(map);
			
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
		if (gaines = -99999) return L.marker(latlng, {icon:cleardot});
		else if (gaines >= 34) return L.marker(latlng, {icon:maroondot});
		else if (gaines >=28 && gaines <34) return L.marker(latlng, {icon:reddot});
	    	else if (gaines >= 25 && gaines < 28) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
}).bindPopup('<h6>Station Name:</h6><br><p>Red River near Gainesville, TX</p><br><h6>Current height: </h6><p>' + gaines + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Gainesville.html" alt="Gainesville Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Gainesville.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create global cheyenne variable and retrieve information, assign it to cheyenne
var cheyenne;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07316500&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        cheyok = (data.value.timeSeries[0].values[0].value[0].value);
        cheyenne = Number(cheyok);
    }
    });

//create cheyenne geojson
var cheyennegeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -99.6684386, 
          35.62643705
        ],
        "type": "Point"
      }
    }
  ]
};

//add ana geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(cheyennegeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (cheyenne = -99999) return L.marker(latlng, {icon:cleardot});
		else if (cheyenne >= 17) return L.marker(latlng, {icon:maroondot});
		else if (cheyenne >= 15 && cheyenne < 17) return L.marker(latlng, {icon:reddot});
	    	else if (cheyenne >= 13.5 && cheyenne < 15) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Washita River near Cheyenne, OK</p><br><h6>Current height: </h6><p>' + cheyenne + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Washita-River-Cheyenne.html" alt="Cheyenne Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Cheyenne.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create global ana variable and retrieve information, assign it to ana
var ana;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07326500&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        anaok = (data.value.timeSeries[0].values[0].value[0].value);
        ana = Number(anaok);
    }
    });

//create ana geojson
var anageoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -98.2433849, 
          35.08422846
        ],
        "type": "Point"
      }
    }
  ]
};

//add ana geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(anageoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (ana = -99999) return L.marker(latlng, {icon:cleardot});
		else if (ana >= 23) return L.marker(latlng, {icon:maroondot});
		else if (ana >= 21 && ana < 23) return L.marker(latlng, {icon:reddot});
	    	else if (ana >= 19 && ana < 21) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Washita River at Anadarko, OK</p><br><h6>Current height: </h6><p>' + ana + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Washita-River-Anadarko.html" alt="Anadarko Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Ana.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create global arthur variable and retrieve information, assign it to arthur
var arthur;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07331000&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        actx = (data.value.timeSeries[0].values[0].value[0].value);
        arthur = Number(actx);
    }
    });

//create arthur geojson
var arthurgeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -95.5019023, 
          33.8751049
        ],
        "type": "Point"
      }
    }
  ]
};

//add arthur geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(arthurgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (arthur = -99999) return L.marker(latlng, {icon:cleardot});
		else if (arthur >= 33) return L.marker(latlng, {icon:maroondot});
		else if (arthur >= 30 && arthur < 33) return L.marker(latlng, {icon:reddot});
	    	else if (arthur >= 27 && arthur < 30) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Red River at Arthur City, TX</p><br><h6>Current height: </h6><p>' + arthur + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Arthur-City.html" alt="Arthur City Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Arthur.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create global dekalb variable and retrieve information, assign it to dekalb
var dekalb;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07336820&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        dktx = (data.value.timeSeries[0].values[0].value[0].value);
        dekalb = Number(dktx);
    }
    });

//create dekalb geojson
var dekalbgeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -94.6943774, 
          33.68400005
        ],
        "type": "Point"
      }
    }
  ]
};

//add arthur geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(dekalbgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (dekalb = -99999) return L.marker(latlng, {icon:cleardot});
		else if (dekalb >= 30) return L.marker(latlng, {icon:maroondot});
		else if (dekalb >= 27 && dekalb < 30) return L.marker(latlng, {icon:reddot});
	    	else if (dekalb >= 24 && dekalb < 27) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Red River near De Kalb, TX</p><br><h6>Current height: </h6><p>' + dekalb + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-DeKalb.html" alt="De Kalb Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/DeKalb.PNG"</a>', {maxWidth: "200px"}).addTo(map);

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
		if (dickson = -99999) return L.marker(latlng, {icon:cleardot});
		else if (dickson >= 31) return L.marker(latlng, {icon:maroondot});
		else if (dickson >= 29 && dickson < 31) return L.marker(latlng, {icon:reddot});
	    	else if (dickson >= 27 && dickson < 29) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Washita River near Dickson, OK</p><br><h6>Current height: </h6><p>' + dickson + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Washita-River-Dickson.html" alt="Dickson Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Dickson.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create global clayton variable and retrieve information, assign it to clayton
var clayton;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07335790&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        clayok = (data.value.timeSeries[0].values[0].value[0].value);
        clayton = Number(clayok);
    }
    });

//create clayton geojson
var claytongeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -95.3408025, 
          34.5748229
        ],
        "type": "Point"
      }
    }
  ]
};

//add antlers geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(claytongeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (clayton = -99999) return L.marker(latlng, {icon:cleardot});
		else if (clayton >= 21) return L.marker(latlng, {icon:maroondot});
		else if (clayton >= 19 && clayton < 21) return L.marker(latlng, {icon:reddot});
	    	else if (clayton >= 17 && clayton < 19) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Kiamichi River near Clayton, OK</p><br><h6>Current height: </h6><p>' + clayton + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Kiamichi-River-Clayton.html" alt="Clayton Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Clayton.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create global antlers variable and retrieve information, assign it to antlers
var antlers;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07336200&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        antok = (data.value.timeSeries[0].values[0].value[0].value);
        antlers = Number(antok);
    }
    });

//create antlers geojson
var antlersgeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -95.6052475, 
          34.24871203
        ],
        "type": "Point"
      }
    }
  ]
};

//add antlers geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(antlersgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (antlers = -99999) return L.marker(latlng, {icon:cleardot});
		else if (antlers >= 35) return L.marker(latlng, {icon:maroondot});
		else if (antlers >= 29 && antlers < 35) return L.marker(latlng, {icon:reddot});
	    	else if (antlers >= 25 && antlers < 29) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Kiamichi River near Antlers, OK</p><br><h6>Current height: </h6><p>' + antlers + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Kiamichi-River-Antlers.html" alt="Antlers Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Antlers.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create global idabel variable and retrieve information, assign it to idabel
var idabel;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07338500&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        iok = (data.value.timeSeries[0].values[0].value[0].value);
        idabel = Number(iok);
    }
    });

//create idabel geojson
var idabelgeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -94.7585482, 
          33.94122094
        ],
        "type": "Point"
      }
    }
  ]
};

//add idabel geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(idabelgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (idabel = -99999) return L.marker(latlng, {icon:cleardot});
		else if (idabel >= 34) return L.marker(latlng, {icon:maroondot});
		else if (idabel >= 32 && idabel < 34) return L.marker(latlng, {icon:reddot});
	    	else if (idabel >= 30 && idabel < 32) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Little River below Lukfata Creek near Idabel, OK</p><br><h6>Current height: </h6><p>' + idabel + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Little-River-Idabel.html" alt="Idabel Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Idabel.PNG"</a>', {maxWidth: "200px"}).addTo(map);
		
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
		if (indar = -99999) return L.marker(latlng, {icon:cleardot});
		else if (indar >= 28) return L.marker(latlng, {icon:maroondot});
		else if (indar >= 26 && indar < 28) return L.marker(latlng, {icon:reddot});
	    	else if (indar >= 25 && indar < 26) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Red River at Index, AR</p><br><h6>Current height: </h6><p>' + indar + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Index.html" alt="Index Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Index.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create global sb variable and retrieve information, assign it to sb
var sb;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07344370&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        sbar = (data.value.timeSeries[0].values[0].value[0].value);
        sb = Number(sbar);
    }
    });

//create sb geojson
var sbgeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -93.8594444, 
          33.08944444
        ],
        "type": "Point"
      }
    }
  ]
};

//add sb geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(sbgeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (sb = -99999) return L.marker(latlng, {icon:cleardot});
		else if (sb >= 41) return L.marker(latlng, {icon:maroondot});
		else if (sb >= 39 && sb < 41) return L.marker(latlng, {icon:reddot});
	    	else if (sb >= 37 && sb < 39) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Red River at Spring Bank, AR</p><br><h6>Current height: </h6><p>' + sb + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Spring-Bank.html" alt="Spring Bank Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/SB.PNG"</a>', {maxWidth: "200px"}).addTo(map);

//create global talco variable and retrieve information, assign it to talco
var talco;    
    $.ajax({
    type: "GET",
    url: "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=07343200&parameterCd=00065&siteStatus=all",
    dataType: 'json',
    async: false,
    data: $(this).serialize(),
    success: function(data) {
        taltx = (data.value.timeSeries[0].values[0].value[0].value);
        talco = Number(taltx);
    }
    });

//create indar geojson
var talcogeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [ -95.1324428, 
          33.3862233
        ],
        "type": "Point"
      }
    }
  ]
};

//add indar geojson to map with flood stage cutoffs using different icons and a popup containing the information
L.geoJSON(talcogeoJSON,  {
	pointToLayer: function (feature, latlng) {
		if (talco = -99999) return L.marker(latlng, {icon:cleardot});
		else if (talco >= 27.5) return L.marker(latlng, {icon:maroondot});
		else if (talco >= 26 && talco < 27.5) return L.marker(latlng, {icon:reddot});
	    	else if (talco >= 20 && talco < 26) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Sulphur River near Talco, TX</p><br><h6>Current height: </h6><p>' + talco + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Sulphur-River-Talco.html" alt="Talco Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Talco.PNG"</a>', {maxWidth: "200px"}).addTo(map);
		
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
		if (shreveport = -99999) return L.marker(latlng, {icon:cleardot});
		else if (shreveport >= 33) return L.marker(latlng, {icon:maroondot});
		else if (shreveport >= 31.5 && shreveport < 33) return L.marker(latlng, {icon:reddot});
	    	else if (shreveport >= 30 && shreveport < 31.5) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Red River at Shreveport, LA</p><br><h6>Current height: </h6><p>' + shreveport + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Shreveport.html" alt="Shreveport Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Shreveport.PNG"</a>', {maxWidth: "200px"}).addTo(map);
			
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
		if (coush = -99999) return L.marker(latlng, {icon:cleardot});
		else if (coush >= 37) return L.marker(latlng, {icon:maroondot});
		else if (coush >= 33 && coush < 37) return L.marker(latlng, {icon:reddot});
	    	else if (coush >= 31 && coush < 33) return L.marker(latlng, {icon:orangedot});
	    	else return L.marker(latlng, {icon:greendot});
	}
//popup has properties of name, height as defined and assigned to global variable, and a link to the 2022 data with a screenshot serving as the hyperlink
}).bindPopup('<h6>Station Name:</h6><br><p>Red River at Coushatta, LA</p><br><h6>Current height: </h6><p>' + coush + ' ft<p><br><h6>2022 Data:</h6><br><a href = "https://dr-maguigan.github.io/Red-River-Watershed/Red-River-Coushatta.html" alt="Coushatta Hydrograph" target="_blank" rel="noopener noreferrer"><img src= "img/Coushatta.PNG"</a>', {maxWidth: "200px"}).addTo(map);

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
	div.innerHTML += '<i class="icon3"></i><span>Moderate Flooding</span><br>';
  	div.innerHTML += '<i class="icon4"></i><span>Major Flooding</span>';
	div.innerHTML += '<i class="icon5"></i><span>Currently Unavailable</span>';

 
  return div;
};

//add legend to map
legend.addTo(map);

//add watermark to map
L.Control.Watermark = L.Control.extend({
    				onAdd: function(map) {
        				var img = L.DomUtil.create('img');

        				img.src = "img/text_next_to_logo.png";
        				img.style.width = '900px';
					img.alt = "Red River Watershed Managment Institute Logo";

        return img;
    },

    onRemove: function(map) {
    }
});

L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}

L.control.watermark({ position: "bottomright"}).addTo(map);

//leaflet radar source code: https://www.eldoradoweather.com/current/misc/maproom/leaflet/leaflet.php
//create empty radarLayers and define hour to use for nexrad images, add radarLayers to map
var radarLayers = [];
for(var hour = 0; hour <= 10; hour++){  
	time = (50)-(hour * 5);
	if (hour < 10) {
	var layer = 'nexrad-n0q-900913-m'+time+'m'
	radarLayers[hour] = L.tileLayer.wms("https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi", {
			layers: layer,
			format: 'image/png',
			transparent: true,
			opacity: 0.0,
		});
                radarLayers[hour].addTo(map);

	} 
	if (hour == 10) {
		var layer = 'nexrad-n0q-900913'
		radarLayers[10] = L.tileLayer.wms("https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi", {
		layers: layer,
		format: 'image/png',
		transparent: true,
		opacity: 0.0,
	});
        radarLayers[hour].addTo(map);
	}
}

//  set the counter to 1
var i = 0;                     

//  create a loop function
function myLoop () {           
   setTimeout(function () {    
     radarLayers.map(function(layer){ layer.setOpacity(0)});
     radarLayers[i].setOpacity(0.5);
     console.log(i);
     i++;
     //  if the counter < 10, call the loop function
     if (i < 9) {            
        myLoop();             
     }else{
     	i = 0;
	myLoop();
      }                      
   }, 500)
	return i;
}

//run function
myLoop();
