var JS11GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Paradero Universidad Juan de Castellanos. Sábado, 12:51 p.m",
            subtitle: "Me siento en el paradero. La señora de los jugos sigue ahí sentada. Escucho música, pero no sé de dónde viene. Me percato luego que es de un almacén que vende muebles y electrodomésticos, una vez paso por allí. Suena aún la fuente de agua en la Juan. El tráfico es más pesado en relación con el registro de la mañana. Ahora sí se amontona la fila de carros detrás del semáforo, decorada por los pitidos que emiten los últimos automotores. Los sonidos que provienen de la construcción de “Gaseosas” cesan por hoy. Es hora de almuerzo. Suenan alarmas, pitidos y viento. Se distinguen aún más músicas que provienen de distintos locales comerciales. ", 
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/JUANS%C3%81BADO12PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36596239717817,
          5.5246812538618855
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(JS11GeoJSON, {
    onEachFeature: function (feature, layer) {
    var JS11Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(JS11Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadosegundahora)
  }
  
  }).addTo(sabadoonceam)