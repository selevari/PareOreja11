var JS16GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Paradero Universidad Juan de Castellanos. Sábado, 3:56 p.m",
            subtitle: "Desde donde estoy sentado, percibo cómo la mayoría de los carros y buses que van por la 11 se desvían para tomar la Avenida Colón, diagonal a la vía. En el lugar donde quedaba la antigua edificación de “Gaseosas”, hay una construcción silente, en reposo. En “La Juan” no hay movimiento alguno. No hay clima universitario por la gran cuadra que se despliega entre calles 11 y 12. La mayoría de los locales automotrices que están cerca permanecen cerrados Algunos pocos locales concentrados en el sector están abiertos. El viento sacude las hojas de los árboles que están plantados en la ciclorruta. Hace frío y la atmósfera se empieza a tornar gris.  Pasan personas caminando y corriendo, así como pasan bicis y monopatines. Esta vez los puedo escuchar, cosa que sería un poco más difícil si voy hacia el sur de la 11.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/JUANS%C3%81BADO4PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36601970734071,
          5.524557982356868
          ],
          "type": "Point"
        }
      }
    ]
  }
  
L.geoJSON(JS16GeoJSON, {
    onEachFeature: function (feature, layer) {
    var JS16Popup =
        "<h3>" + feature.properties.title + "</h3>" + 
        "<h5>"  + feature.properties.subtitle + "</h5>" + 
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(JS16Popup)
},

pointToLayer: function(feature, latlng){
  return L.circleMarker(latlng, sabadotercerahora)
}

  }).addTo(sabadocuatropm)