var BM20GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Bosque de la República. Miércoles, 7:03 p.m",
            subtitle: "Algunos chicos juegan “herradura” en uno de los costados de la cancha. Algunas otras personas, del lado de la otra cancha, están preparándose para jugar un partido de campeonato. Murmullos y conversaciones son las que escucho desde la grada en la que me encuentro sentado. Hace viento y frío. Personas que van pasando, con tinto en la mano. Conversaciones. “Lo tapé, gonorrea”, grita alguien que juega herradura. De lejos, levemente, alcanzo a escuchar el tráfico sobre la 11. Las conversaciones hacen parte del momento. Escucho sonidos de llamada de algunas personas que afanan a los jugadores que faltan. Mientras tanto, las jugadoras que estarán jugando en un momento, calientan. Se pasan el balón, arrastran sus pies, calientan a la portera. El impacto del balón sobre las rejas de la cancha hace vibrar el entorno. Algunos niños se balancean en los columpios y las máquinas en el parque. El chirreo es evidente.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/BOSQUEMIERCOLES7PM.wav", 
        },
        "geometry": {
          "coordinates": [
            -73.36436817786013,
            5.52678463694437
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(BM20GeoJSON, {
    onEachFeature: function (feature, layer) {
    var BM20Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(BM20Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, cuartahora)
  }
  
  }).addTo(ochopm) 