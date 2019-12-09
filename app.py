# import necessary libraries
import pandas as pd
from flask import (
    Flask,
    render_template,
    jsonify,
    request)
# from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
# Routes getting data
@app.route("/data_topten")
def list_locations():
    filename = "data/burn25_rev.csv"
    df_ten = pd.read_csv(filename)
    topten = df_ten[["Acres", "Lat", "Long", "Year", "Name", "State", "Cause"]]
    topten["Acres"] = topten["Acres"].replace('%', '')
    topten["Acres"] = topten["Acres"].astype(float)
    topten = topten.sort_values("Acres", ascending=False)
    # print(topten, flush=True)
    return topten.head(10).to_json(orient="records")

@app.route("/data_states")
def state_locations():
   filestates = "data/state.csv"
   df_states = pd.read_csv(filestates)
   states = df_states[["Abbr", "Latitude", "Longitude", "State", "NumberOfFires"]]
   print(states, flush=True)
   return states.to_json(orient="records")

#  to create array for heat map locations 
fileheat = "burn25.csv"
df_heat = pd.read_csv(fileheat)
print("df_heat", flush=True)
heatMapData = df_heat[["Lat", "Long","Year"]]
# to get data for the slider
SliderData = df_heat[["Year"]]
SliderDataSorted = SliderData["Year"].unique().tolist()
SliderDataSorted.sort()

print(SliderDataSorted, flush=True)
heatMapjson = heatMapData.to_dict(orient="records")
sliderjson = SliderDataSorted

# Returning data to html
@app.route("/topten")
def toptendisplay():
    return render_template("topten.html")

@app.route("/causes")
def causesdisplay():
    return render_template("causes.html")


@app.route("/states")
def statesdisplay():
    return render_template("states.html")

@app.route("/heatdata")
def heat_location():
    json_data = jsonify({"heatMapData":heatMapjson,
                         "sliderData":sliderjson })
    return json_data

@app.route("/regions")
def heatmapdisplay():
    return render_template("regions.html")

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)