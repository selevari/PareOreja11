var HM7GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          title: "Monumento Los Hongos. Miércoles, 7:16 a.m",
          subtitle: "A esta hora el tráfico ya empieza a ir en aumento. Es más frecuente. Las personas esperan, sobre la acera, el bus para llegar a sus destinos. La fuente está encendida. Algunos pájaros cantan sobre la cuerda de electricidad. Se escuchan pitidos. Los trabajadores de aseo agitan sus grandes escobas, con fuertes cerdas, sobre el asfalto. Algunos locales van abriendo sus puertas. Pasa gente trotando, respirando fuerte o jadeando, sobre la ciclorruta. Las personas pasan caminando hacia sus trabajos, o van llevando a sus hijos o hijas hacia el colegio o jardín.",
          audio_url: "https://selevari.github.io/PareOreja11/Puntos/HONGOSMIERCOLES7AM.wav",
          "amenity": "Monument"
        },
        "geometry": {
          "coordinates": [
            -73.36838678558667,
            5.516408218191373
          ],
          "type": "Point"
        },
        "id": 0
      }
    ]
  }
  
  L.geoJSON(HM7GeoJSON, {
      onEachFeature: function (feature, layer) {
      var HM7Popup =
          "<h3>" + feature.properties.title + "</h3>" +
          "<h5>"  + feature.properties.subtitle + "</h5>" +
          "<audio src = " + feature.properties.audio_url + " controls />"
      layer.bindPopup(HM7Popup)
  },

  pointToLayer: function(feature, latlng){
    return L.circleMarker(latlng, primerahora)
  }
  
    }).addTo(sieteam)