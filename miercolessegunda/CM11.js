var CM11GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Calle 4. Miércoles, 12:03 p.m",
            subtitle: "Estoy sobre la 11 con 4. Aprovecho el momento para hacer grabación. Sobre la cuadra, pasa un gran grupo de personas vestidas de naranja, haciendo campaña política en el sector. Se nota la presencia del grupo, con un gran parlante que hace perifoneo del candidato. Risas, obturación de la cámara y pose con las personas que van pasando por el sector, o que permanecen sobre la cuadra. Mi hermano le ignora el saludo al candidato. Conversaciones indistintas que se mezclan con el sonido de los carros que pasan. Algunos carros “echan pito”. El grupo sigue avanzando hacia el centro, invadiendo la acera y la ciclorruta. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/CASAMIERCOLES12PM.wav"
        },
        "geometry": {
          "coordinates": [
            -73.36750055206139,
            5.518466182743083
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(CM11GeoJSON, {
    onEachFeature: function (feature, layer) {
    var CM11Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(CM11Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, segundahora)
  }
  
  }).addTo(onceam)