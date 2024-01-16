var BS11GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Bosque de la República. Sábado, 12:01 p.m",
            subtitle: "Me siento en la grada nuevamente. Ahora sí están en pleno arreglo de la vía. Un pequeño carro levanta el asfalto del tramo de la calle. Es un arreglo bastante curioso, porque están sólo levantando un área de más o menos 6x3 metros. Suena el perifoneo de la tienda de zapatos. Un equipo de baloncesto juega en la cancha. Ahora no tengo la posibilidad de escuchar pájaros. El viento acompaña el momento, así como también el tráfico suave. Sigue levantando asfalto la máquina. Asocio el sonido con las eternas promesas políticas de arreglar la vía, y más en estos tiempos de cierre de campaña. Así como escucho gritos, también escucho el pivoteo y las indicaciones del instructor de baloncesto", 
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/BOSQUES%C3%81BADO12PM.wav"
        },
        "geometry": {
          "coordinates": [
            -73.36473170255165,
          5.527037265819402
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(BS11GeoJSON, {
    onEachFeature: function (feature, layer) {
    var BS11Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(BS11Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadosegundahora)
  }
  
  }).addTo(sabadoonceam)