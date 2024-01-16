var CM7GeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        title: "Carrera 11 con Calle 4. Miércoles, 8:14 a.m",
        subtitle: "El tráfico va creciendo considerablemente, comparando minutos antes que pasé, cuando empecé el recorrido. Los carros van ocupando puesto sobre las aceras, para entrar en los talleres, a ser atendidos en los locales de repuestos o de lujos. Todos los locales comerciales del sector ya están abiertos. Pasa el vendedor de plátanos con su parlante, su clásico perifoneo de venta de plátanos. Pasan personas caminando, que también esperan sobre el andén. Buses que paran, chiflidos entre la gente que se saluda desde lejos. Alarmas de carros que se activan, controles de bloqueo y de desbloqueo. Los buses que van hacia el centro pasan, en su mayoría, rápido. Van llenos",
        audio_url: "https://selevari.github.io/PareOreja11/Puntos/CASAMIERCOLES8AM.wav"
      },
      "geometry": {
        "coordinates": [
          -73.36747007241935,
          5.518560771806477
        ],
        "type": "Point",
        "marker-color": "#c8c800",
        "marker-size": "large",
        "marker-symbol": "monument"

      }
    }
  ]
}

L.geoJSON(CM7GeoJSON, {
  onEachFeature: function (feature, layer) {
  var CM7Popup =
      "<h3>" + feature.properties.title + "</h3>" +
      "<h5>"  + feature.properties.subtitle + "</h5>" +
      "<audio src = " + feature.properties.audio_url + " controls />"
  layer.bindPopup(CM7Popup)
},

pointToLayer: function(_feature, latlng){
  return L.circleMarker(latlng, primerahora)
}

}).addTo(sieteam)
