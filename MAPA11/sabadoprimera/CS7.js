var CS7GeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        title: "Carrera 11 con Calle 4. Sábado, 7:55 a.m",
        subtitle: "Gente que camina hacia la improvisada “parada” de autobús y que allí se despide. “Uy juemadre, ya van a ser las 8”, dice una señora después de despedirse de sus conocidos. Vuelve a pasar el carro de los tamales, esta vez, por la 11 hacia el norte. Algunos locales comerciales empiezan a abrirse, suenan las puertas al abrir. El flujo vehicular empieza a aumentar. Algunos buses pasan despacio, esperando que la gente salga a la acera para parar y subirse. Otros, que ya van llenos, pasan más rápido. Buses llenos hacia el norte, vacíos hacia el sur. Son casi las 8 y empieza a oler a pan fresco. Me acerco un poco a la panadería y empieza a sonar la alarma del horno de pan. Está listo el pan y la gente se agrupa a la entrada de la panadería, esperando a que salga el pan del horno para comprarlo. ",
        audio_url: "https://selevari.github.io/PareOreja11/Puntos/CASASÁBADO8AM.wav"
      },
      "geometry": {
        "coordinates": [
          -73.36743065092067,
          5.51883110593846
        ],
        "type": "Point",
        "marker-color": "#c8c800",
        "marker-size": "large",
        "marker-symbol": "monument"

      }
    }
  ]
}

L.geoJSON(CS7GeoJSON, {
  onEachFeature: function (feature, layer) {
  var CS7Popup =
      "<h3>" + feature.properties.title + "</h3>" +
      "<h5>"  + feature.properties.subtitle + "</h5>" +
      "<audio src = " + feature.properties.audio_url + " controls />"
  layer.bindPopup(CS7Popup)
},

pointToLayer: function(_feature, latlng){
  return L.circleMarker(latlng, sabadoprimerahora)
}

}).addTo(sabadosieteam)
