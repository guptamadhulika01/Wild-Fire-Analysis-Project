# Wild-Fire-Analysis-Project

Wildfires in USA 1995-2015

 
Is there a change in number and severity of wildfires in the USA
over these years. 
Is climate change contributing to wildfire frequency

Visuals:
1. Heat map of USA. Chropleth map. Slider with user interactivity that changes the map 
as the user slides to the next year
2. Marker Map with top 10 fires by size in USA. Text shows fire name, year and size
3. Causes of Fire. Line graph with cumulative causes of fire, by year on x-axis
4. Fires by State. Map of USA with mouse over action displaying 
total number of fires for the State
5. Time taken to put out. Bubble scatter plot of the mean number of days
fires were put out. Years on x-axis

Data
https://www.fs.usda.gov/rds/archive/catalog/RDS-2013-0009.3
Originally from https://www.kaggle.com/rtatman/188-million-us-wildfires

Data Wrangling
Original file type:sqlite downloaded. 
Could not be read into pandas
Experimented with libraries but problem was geolocation data
So
The same dataset was available at USDA, downloaded.
Read into pandas. 12 columns imported.
Original dataset had 1.7 million rows. But Github file limit is 100mb
Dataset was modified down to 140,685 rows by filtering out fires less than 25 acres.
There were many many smaller fires in the dataset. 
Pandas df was saved as both json and csv files. 

App.py file and HTML and CSS files
