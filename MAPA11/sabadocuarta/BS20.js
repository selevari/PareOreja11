var BS20GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Bosque de la República. Sábado, 7:16 p.m",
            subtitle: "Estoy en una de las gradas del parque. Nuevamente, dándole la espalda a la 11. Pasan buses, motos y autos. Esta vez, no están jugando en todas las canchas. Sólo en la segunda. Torneo de micro femenino. El pitido del juez dirige el encuentro. La danza del arrastre de suela, de la pisada de balón de las jugadoras. Impactos de balón sobre la reja. Ánimos en las gradas por parte de los aficionados. Aviso de la arquera del equipo de camiseta oscura. Pasa una patrulla de policía a toda velocidad. “Pegadita, pegadita con ella”, dice la arquera. Pitido final." + "El cese del juego me permite escuchar más cosas. El chirrido del columpio del parque sigue, pero hay menos niñas y niños jugando. El perifoneo también sigue, no ha parado desde que pasé antes. Esta vez, a la música de la pequeña caseta se le suma la lejana música de una bolirrana que está frente al bosque. Buses y carros que van al sur pasan rápido. Conversaciones ininteligibles desde la grada. Pasa caminando la vendedora de tintos. Las demás jugadoras se alistan al costado. Alcanzo a percibir más sonido de música, que proviene seguramente de algún bar que no puedo localizar. Sonidos de celular, sonido del travesaño. “Tinticos por aquí”. Pitido inicial, empieza el otro encuentro, aplausos y vítores para las jugadoras.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/BOSQUES%C3%81BADO7PM.wav", 
        },
        "geometry": {
          "coordinates": [
            -73.36459110322365,
          5.5267143354598005
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(BS20GeoJSON, {
    onEachFeature: function (feature, layer) {
    var BS20Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(BS20Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadocuartahora)
  }
  
  }).addTo(sabadoochopm) 