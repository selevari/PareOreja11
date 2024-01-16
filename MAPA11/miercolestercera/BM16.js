var BM16GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Bosque de la República. Miércoles, 3:23 p.m",
            subtitle: "Me siento en una de las gradas de la cancha de baloncesto del Bosque, que es la que está ubicada junto a la 11. Tres chicos juegan baloncesto, mientras que hacia la calle aledaña se proyecta el típico perifoneo de la venta de zapatos. “Punto de fábrica, punto de fábrica”. El parque hoy está solo, aunque no faltan las personas que lo atraviesan para tomar la peatonal de la carrera décima y seguir hacia el centro. Pasan conversando y riendo. Algunas personas pasan con audífonos. Sobre la 11 pasan carros, motos y buses que vienen del centro y que toman la doble vía con el inicio de la ciclorruta. Escucho risas en la pequeña caseta que está entre la grada y la 11. Risas de la señora que tiene su puesto de venta de mango biche, quien mantiene conversación con un señor que se sostiene en las viejas varillas que cercan el parque. Suena música en el puesto de la señora. Aunque esté en un parque que está casi vacío, no logro distinguir pájaros.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/BOSQUEMIERCOLES3PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36474989419497,
            5.526867601734452
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(BM16GeoJSON, {
    onEachFeature: function (feature, layer) {
    var BM16Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(BM16Popup)
},

pointToLayer: function(feature, latlng){
  return L.circleMarker(latlng, tercerahora)
}

  }).addTo(cuatropm)