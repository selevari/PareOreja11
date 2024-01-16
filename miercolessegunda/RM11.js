RM11GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Carrera 10. Frente al Autoservicio Roa. 12:23 P.M.",
            subtitle: "Me siento junto al monumento que marca los pasos de Simón Bolívar sobre la zona. Es mediodía en “La 11”. Sobre las vías, los/las trabajadores/as instalan lujos o equipos de sonido en los carros. Suena la radio desde los almacenes del lugar. En algún parlante, suena el perifoneo y/o música. Algunas personas caminan sobre la ciclovía, o pasan en su bicicleta. Hace sol, pero también pega el viento. El tráfico se hace un poco más movido a esta hora. Las puertas de los carros son abiertas o cerradas por los trabajadores, que cacharrean en ellas. De uno de los árboles que está plantado sobre la ciclovía, caen hojas. Se escuchan alarmas de carros, pitidos y chiflidos.  ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/ROAMIERCOLES12PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36680691541075,
            5.521910296673205,
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(RM11GeoJSON, {
    onEachFeature: function (feature, layer) {
    var RM11Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(RM11Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, segundahora)
  }
  
  }).addTo(onceam)