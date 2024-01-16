var HM11GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Monumento Los Hongos. Miércoles, 11:52 p.m.",
            subtitle: "Llego a la intersección. La caída de agua del monumento está apagada. Pasan carros, motos y autobuses tanto por la avenida, como por la 11. Hay muchos pitidos y a lo lejos, se escucha propaganda política, sobre la 11. Puedo escuchar cómo el viento pega sobre la palma que está en la esquina, así como las hojas de los árboles que están contiguas al monumento. Quizá por el ruido del agua no las había escuchado antes. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/HONGOSMIERCOLES12PM.wav"
        },
        "geometry": {
          "coordinates": [
            -73.36839926631612,
            5.516541578907663
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(HM11GeoJSON, {
    onEachFeature: function (feature, layer) {
    var HM11Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(HM11Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, segundahora)
  }
  
  }).addTo(onceam)