RS16GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Carrera 10. Frente al Autoservicio Roa. 3:37 P.M.",
            subtitle: "Suena el aleteo por la calle. Desde el local de sonido, se expide una gran resonancia. En los otros comerciales suena música, pero es totalmente opacada por los bajos del gran bafle. El tráfico a esta hora es moderado. Pasan personas caminando por la ciclovía y las aceras de la avenida. Algunas personas trabajan sobre las orillas de la vía. Es difícil percibir los sonidos de las demás acciones cuando está sonando el aleteo. Suena por un momento, ya que el dueño del local cambia la pista para poner la radio. El sonido de la radio se sincroniza con los que se emiten desde los demás parlantes. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/ROASABADO3PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36687096406831,
          5.521662497909233
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(RS16GeoJSON, {
    onEachFeature: function (feature, layer) {
    var RS16Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(RS16Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadotercerahora)
  }
  
  }).addTo(sabadocuatropm)