RS7GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Carrera 10. Frente al Autoservicio Roa. 7:28 A.M.",
            subtitle: "Algunas personas van llegando, poco a poco, a sus lugares de trabajo. El tráfico es liviano y periódico. En cierto punto, cuando no hay autos cerca, alcanzo a escuchar los pitidos que emite el semáforo instalado en la esquina de Almacenes Paraíso. Algunos buses paran, para recoger personas. Por la ciclovía, pasan algunas personas caminando o en bicicleta. Un taxi deja a una familia sobre la vía. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/ROASABADO7AM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.3668226460752,
          5.521680881142856 
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(RS7GeoJSON, {
    onEachFeature: function (feature, layer) {
    var RS7Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(RS7Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadoprimerahora)
  }
  
  }).addTo(sabadosieteam)