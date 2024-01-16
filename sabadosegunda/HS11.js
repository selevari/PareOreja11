var HS11GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Monumento Los Hongos. Sábado, 12:24 p.m.",
            subtitle: "El tráfico es masivo, en ambos sentidos y por ambos ejes viales que se cruzan en donde me encuentro. Los pitidos se hacen notorios y no se manifiestan como en la mañana. Escucho gritos y chiflidos. Así es la forma en cómo la gente se llama aquí. Suena el notorio bloqueo y desbloqueo de alarmas de carro, así como también suena el “chillido” de las alarmas. Escucho un ladrido de perros, pero no puedo definir su origen. De nuevo, aparece la señora vendiendo limpiones sobre la 11, bajo el semáforo del cruce que se interseca en la Avenida Oriental. Un buen día para ella se mide en el número de carros que paren en el semáforo. Más posibilidades de que compren lo que ella ofrece. ", 
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/HONGOSS%C3%81BADO12PM.wav"
        },
        "geometry": {
          "coordinates": [
            -73.36840817402687,
          5.516355383326712
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(HS11GeoJSON, {
    onEachFeature: function (feature, layer) {
    var HS11Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(HS11Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadosegundahora)
  }
  
  }).addTo(sabadoonceam)