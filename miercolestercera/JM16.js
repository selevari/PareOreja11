var JM16GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Paradero Universidad Juan de Castellanos. Miércoles, 3:05 p.m",
            subtitle: "Me sitúo nuevamente en el paradero, esta vez entre semana. Llaman mi atención los sonidos que provienen de la construcción que se erige por sobre las antiguas paredes de lo que se conocía como “Gaseosas”. Suenan golpes de mazos, llamados en la obra, sierras cortando algún material. Como es usual, pasan buses, carros y motos. Pasan también estudiantes caminando y hablando. Un chico vende bolsas de la basura a los carros que están parados ante el semáforo que va en sentido sur. “Lento pero seguro”, grita él. Pasan carros con música a todo volumen, que luego se mezclan con las risas de los grupos de estudiantes que van pasando. Escucho conversaciones, presenciales y remotas, que se dan a través del uso de celular. Pasa mi vecina y me pregunta qué ando haciendo. Los árboles suenan al impacto del viento. Es una tarde soleada.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/JUANMIERCOLES3PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.3658819705311,
            5.524779304150357
          ],
          "type": "Point"
        }
      }
    ]
  }
  
L.geoJSON(JM16GeoJSON, {
    onEachFeature: function (feature, layer) {
    var JM16Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(JM16Popup)
},

pointToLayer: function(feature, latlng){
  return L.circleMarker(latlng, tercerahora)
}

  }).addTo(cuatropm)