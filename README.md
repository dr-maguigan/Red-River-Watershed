#Red River Watershed Map
##Purpose
The purpose of this site is to inform users interested in river levels within the Red River Watershed about the current conditions. Users can explore the gages on different rivers within the Red River Watershed and click on each gage to determine the current levels and explore historical averages and 2022 levels.

##Design and Methods
The map is designed for users to interact with the map and the data available and provide references for each gage for the user to explore on their own.

###Languages
The landing page is written in HTML, CSS, and Leaflet (Javascript API). The landing page is designed with HTML and CSS with a call to the JS script (main.js).

Each page opened by clicking the hydrograph is designed with chart.JS. Data used in the graphs come from USGS.

###Data
Data come from USGS river gage sites in an RDF format. Data were cleaned in Excel and transformed into an SQL script to import data into an SQL table. Following the import, data were analyzed for average gage height for each day of the year over the span of gage height data available (15 years in most cases). Data were also analyzed to determine the average gage height per day for 2022. 
