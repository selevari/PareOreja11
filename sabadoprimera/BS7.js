BS7GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Bosque de la República. Sábado, 8:42 a.m",
            subtitle: "Me siento en la grada de siempre. Hay un señor jugando baloncesto solo en la cancha. Suena su arrastre de zapatos y el impacto de la superbola en el tablero, así como el pivoteo. Sobre la calle 13 no pasan autos, porque están arreglando la vía, la calle está “rota”. Hoy escucho los pájaros con más claridad, desde que llego. Pero en un momento, suena el parlante del local de venta de zapatos. No alcanzo a registrar ese cambio y me gustaría poderlo hacer de nuevo, registrar ese cambio. Hay chicos entrenando en las canchas de microfútbol. Suenan sus gritos, el golpe del balón contra las rejas. Los carros pasan lentos, es un tráfico muy tranquilo. Algunos pitidos, y algunas risas de la caseta que está detrás de mí. De repente, suena la radio en el parlante del perifoneo. Se empieza a “ambientar” el Bosque. Antes de que sonara el parlante, alcancé a registrar los decibeles. Entre unos 35 y 45 dB, para luegos estar entre unos 50 y 60 dB. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/BOSQUESÁBADO8AM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36475778746795,
          5.526833028968625
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(BS7GeoJSON, {
    onEachFeature: function (feature, layer) {
    var BS7Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(BS7Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadoprimerahora)
  }
  
  }).addTo(sabadosieteam)