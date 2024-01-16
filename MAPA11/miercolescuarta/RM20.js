RM20GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Carrera 10. Frente al Autoservicio Roa. 8:05 P.M.",
            subtitle: "El tráfico a esta hora es reducido. Me instalo frente a los locales comerciales de sonido, que ya están cerrados. De igual manera, los supermercados han cerrado sus puertas. Hace frío y viento. En el billar/bolirrana del sector, suena música. Algunas personas están paradas sobre la calle, conversando y tomando cerveza. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/ROAMIERCOLES8PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36694844604075,
          5.521605273801768
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(RM20GeoJSON, {
    onEachFeature: function (feature, layer) {
    var RM20Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(RM20Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, cuartahora)
  }
  
  }).addTo(ochopm)