var HS16GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Monumento Los Hongos. Sábado, 3:25 p.m.",
            subtitle: "Me sitúo debajo del monumento. Escucho y siento la caída del agua. Ahora, el tráfico se hace más pesado por la avenida. Pitidos, aceleraciones de automotores. Antes de llegar al monumento, pasó una caravana política, con muchos pitidos de motos y autos, así como también el sonido de perifoneo de la candidata en cuestión. Sobre la avenida, pasa un hombre empujando una carreta con accesorios para teléfono. Su carreta lleva avisos de venta de accesorios y de vidrios templados para celular. Mientras pasa, le chifla a uno de los muchachos que limpia parabrisas mientras el semáforo de la avenida está en rojo. Se saludan a gritos, debido a la distancia. Algunas familias salen con sus niños, quienes van montando triciclos. ",
            audio_url:"https://selevari.github.io/PareOreja11/Puntos/HONGOSS%C3%81BADO3PM.wav"
        },
        "geometry": {
          "coordinates": [
            -73.36855222035292,
          5.516247422682724
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(HS16GeoJSON, {
    onEachFeature: function (feature, layer) {
    var HS16Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(HS16Popup)
},

pointToLayer: function(feature, latlng){
  return L.circleMarker(latlng, sabadotercerahora)
}

  }).addTo(sabadocuatropm)