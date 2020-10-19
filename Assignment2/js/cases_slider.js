{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 500,
  "height": 300,
  "projection": {"type": "equalEarth"},
  "title": "COVID-19 Reported Cases",
  "layer": [
    {
      "data": {
        "url": "https://raw.githubusercontent.com/EmilyYeoh/FIT3179/master/Assignment2/js/ne_110m.topojson",
        "format": {"type": "topojson", "feature":"ne_110m_admin_0_countries"}
      },
      "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "white"}
    },
    {
      "data": {
        "url": "https://raw.githubusercontent.com/EmilyYeoh/FIT3179/master/Assignment2/data/covid_dataset.csv"
      }, 
      "projection": {"type": "equalEarth"},
      "mark": {"type": "circle", "tooltip": {"content": "data"}}, 
      
      "selection": {"Day": {"type": "single", "fields": ["day"], "bind":  {"day":{"input": "range", "min": 0, "max": 60, "step": 1, "name": "Day"}},"init": {"day": "0"}}},
      "encoding": {
        "longitude": {"field": "long", "type": "quantitative"},
        "latitude": {"field": "lat", "type": "quantitative"}, 
        "size": {"field": "confirmed", "type": "quantitative"},
        "color": {"field": "confirmed", "type": "quantitative", "scale": {"scheme": "reds"}      
          },
        "detail": {"field": "day", "type": "nominal"}
      },
      "transform": [{"filter": {"selection": "Day"}}]
    }
  ]
}
