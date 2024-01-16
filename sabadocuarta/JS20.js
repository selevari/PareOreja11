var JS20GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Paradero Universidad Juan de Castellanos. Sábado, 7:31 p.m",
            subtitle: "Me encuentro nuevamente sobre el “parteaguas”. El tráfico se hace más constante, en comparación con el registro de las 4 de la tarde. La mayoría de los automóviles sigue desviando hacia la Avenida Colón. Algunos otros siguen derecho para encontrarse con la Calle 9 y dirigirse hacia el centro de la ciudad. Las personas siguen caminando, en ambos sentidos. Hay más personas. No olvido que es sábado y que se “arma” ambiente en las calles. Sin embargo, hace más frio y más viento, alcanzo a escuchar las hojas de los árboles con mayor fuerza. Sigo parado en la esquina, debajo del letrero que indica el sentido de la calle. Escucho cómo los buses paran para recoger pasajeros, cómo aceleran y cómo cierran sus puertas. Conversaciones indistintas de familias que van hacia el sur y de amigos que van hacia el centro de la ciudad. Pitidos que van y vienen. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/JUANS%C3%81BADO7PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36597739173341,
          5.524653924771741
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(JS20GeoJSON, {
    onEachFeature: function (feature, layer) {
    var JS20Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(JS20Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadocuartahora)
  }
  
  }).addTo(sabadoochopm)