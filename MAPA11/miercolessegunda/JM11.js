var JM11GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Paradero Universidad Juan de Castellanos. Miércoles, 12:16 p.m",
            subtitle: "Me encuentro sentado en el paradero. Personas que pasan caminando. Es hora del almuerzo. En la construcción siguen trabajando, aunque ahora se me dificulta un poco más escuchar los sonidos que provienen de ella. La pila de la Juan se encuentra encendida. Una señora vende maní al frente, junto al semáforo. Mientras este está en rojo, la señora aprovecha para pasar vendiendo, carro por carro. La señora que vende jugos sigue ahí, en su puesto. Estudiantes de colegios pasan, como pasan también estudiantes universitarios. Pasan algunos carros con música, como también pasa un chico en patineta. Algunos pitidos de los carros son dobles, otros para apresurar. Puertas de buses que se abren y que se cierran.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/JUANMIERCOLES12PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36601280513499,
            5.524596585564211,
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(JM11GeoJSON, {
    onEachFeature: function (feature, layer) {
    var JM11Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(JM11Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, segundahora)
  }
  
  }).addTo(onceam)