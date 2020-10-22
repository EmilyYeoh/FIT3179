{
 "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
 "title": "China Average Temperature (22/01/2020 - 22/03/2020)",
 "width": 800,
 "height": 600,
 "projection": {"type": "equirectangular"},
 "data": {
 "url": "https://raw.githubusercontent.com/EmilyYeoh/FIT3179/master/Assignment2/js/provinces.topojson",
        "format": {"type": "topojson", "feature":"provinces"}
 },
 "transform": [
 {
 "lookup": "properties.name",
 "from": {
 "data": {
 "url": "https://raw.githubusercontent.com/EmilyYeoh/FIT3179/master/Assignment2/data/covid_dataset_china.csv"
 },
 "key": "Province",
 "fields": ["confirmed", "avg_temp", "avg_hum", "Province"]
 }
 }
 ],
 "mark": {"type": "geoshape", "stroke": "gray", "strokeWidth": 0.5},
 "encoding": {"color": {
 "field": "avg_temp",
 "type": "quantitative",
 "scale": {
 "type": "threshold",
 "domain": [-5, 0, 5, 10, 15, 20, 25],
 "range": ["#6babd0","#afd3e6","#e0eaed","#f2f0eb","#f8e7d0", "#fbca8b", "#ec9d3e","#c5690d","#de1b20","#ca0b22","#b21218"]
 }
 },
 "tooltip": [
 {"field": "properties.admin", "type": "nominal", "title": "Country"},  
 {"field": "properties.name", "type": "nominal", "title": "Province"},
 {"field": "confirmed", "type": "quantitative"},
 {"field": "avg_temp", "type": "quantitative"}
 ]
 }
}
