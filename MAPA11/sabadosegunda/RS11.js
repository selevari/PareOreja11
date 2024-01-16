RS11GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Carrera 10. Frente al Autoservicio Roa. 11:41 A.M.",
            subtitle: "Suena música en tres locales de la zona: el local de venta de sonido, la barbería y el Autoservicio Roa. Las sonoridades de entremezclan, haciéndose ininteligibles. Música y radio, radio y música. La batalla por saber qué es lo que suena más duro. En el Autoservicio la radio suena más fuerte de lo normal, más que los otros días. A esta hora el tráfico es pesado. Se hace lento en el carril sur-norte. En ambos costados de la calle, la gente trabaja; ponen lujos o arreglan vidrios. Es una mañana soleada, pero con buenos vientos. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/ROASABADO11AM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.3668399964965,
          5.521645745800868
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(RS11GeoJSON, {
    onEachFeature: function (feature, layer) {
    var RS11Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(RS11Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadosegundahora)
  }
  
  }).addTo(sabadoonceam)