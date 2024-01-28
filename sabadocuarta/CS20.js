var CS20GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Calle 4. Sábado, 8:11 p.m",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/CASAS%C3%81BADO8PM.wav",
            subtitle: "Me sitúo junto al asadero de pollos. Al lado, en la iglesia cristiana, hacen culto. Escucho y veo cómo las tijeras cortan en segundos el pollo asado. El tráfico por la vía es bastante liviano. Eso sí, a mi parecer hay más motos que autos. Motos que llevan domicilios. Puertas de autos que abren y cierran las personas que luego entran o que salen de la panadería o del asadero. Escucho algunas conversaciones. Uno que otro pitido, pero más el doble pitido de saludo o de aviso. Algunos carros que pasan con música. El parlante de la iglesia se alcanza a escuchar sobre la vía.",
        },
        "geometry": {
          "coordinates": [
            -73.36759748201447,
          5.518610082370543
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(CS20GeoJSON, {
    onEachFeature: function (feature, layer) {
    var CS20Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(CS20Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadocuartahora)
  }
  
  }).addTo(sabadoochopm)
