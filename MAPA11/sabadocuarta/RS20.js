RS20GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Carrera 10. Frente al Autoservicio Roa. 7:58 P.M.",
            subtitle: "A esta hora, el tráfico se hace liviano sobre esta parte de “La 11”. Los parlantes, tanto el de Autoservicios Roa como el de la barbería, siguen encendidos. Algunas personas pasan caminando sobre el andén; la mayoría camina hacia el sur. El billar-bolirrana está abierto, pero no suena música. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/ROASABADO7PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36679126505392,
          5.521599182950368
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(RS20GeoJSON, {
    onEachFeature: function (feature, layer) {
    var RS20Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(RS20Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadocuartahora)
  }
  
  }).addTo(sabadoochopm)