var JS7GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Paradero Universidad Juan de Castellanos. Sábado, 8:28 a.m",
            subtitle: "Estoy en el paradero de la Juan. Noto con fuerza la construcción sobre lo que era “Gaseosas”. Los obreros martillan y resanan paredes colgados a un andamio. Algunos, que no logro ver, estarán cortando algo con una sierra. Trabajan al son de un grande parlante que debe estar ubicado sobre la obra, suena Nuestro Sueño de Grupo Niche. A lo lejos escucho el perifoneo de venta de plátanos fritos, que seguramente desvió por algunas de las calles que pasé antes. No logra pasar por el paradero. La gente pasa caminando, algunos conversan y se ríen. Conversan con la señora que puso su puesto de venta de jugos de naranja al lado de la universidad. Unos amigos se encuentran frente a mí y uno de ellos le pregunta al otro “y usted qué”, luego de abrazarse. Escucho el arrastre de los papeles del piso que produce el viento. Hoy está encendida una fuente de agua dentro de la Juan. Escucho el agua caer. De un local de empanadas que está al frente sale el sonido de un parlante, suena “Muevan las industrias” de Los Prisioneros. Escucho algunos ladridos de perros y como es común, suenan buses, carros y motos. El tráfico está tranquilo a esta hora. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/JUANSÁBADO8AM.wav",
            color: "green"
        },
        "geometry": {
          "coordinates": [
            -73.36590351983828,
          5.524729119461128
          ],
          "type": "Point"
        }
      }
    ]
  }
  L.geoJSON(JS7GeoJSON, {
    onEachFeature: function (feature, layer) {
    var JS7Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(JS7Popup)
},

pointToLayer: function(feature, latlng){
  return L.circleMarker(latlng, sabadoprimerahora)
}

  }).addTo(sabadosieteam)