var CM16GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Calle 4. Miércoles, 4:42 p.m",
            subtitle: "Es una tarde soleada. Me siento sobre una de las escaleras de algún negocio de autopartes sobre la cuadra. Escucho alarmas y carros que se parquean. Pasos y conversaciones al sol de la tarde, que pega justo sobre la acera desde el occidente. “A la orden, buenas tardes. Cómo me le va”, pronuncian desde los locales que están cerca del lugar en donde estoy ubicado. Algunos ladridos de perros que salen a pasear. Suena el nuevo taller automotriz que inauguró hace algunas semanas. Suena la remachadora en eco, desde el fondo, desde alguna parte de la gran bodega. Es un nuevo sonido en la cuadra. Alcanzo a percibir algunos destellos de radio, en el fondo de un local. Pasa un señor vendiendo chance: “la lotería, el astro”.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/CASAMIERCOLES4PM.wav"
    },
        "geometry": {
          "coordinates": [
            -73.36743083060851,
            5.518712926439363
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(CM16GeoJSON, {
    onEachFeature: function (feature, layer) {
    var CM16Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(CM16Popup)
},

pointToLayer: function(feature, latlng){
  return L.circleMarker(latlng, tercerahora)
}

  }).addTo(cuatropm)