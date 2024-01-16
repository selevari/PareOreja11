RM16GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Carrera 10. Frente al Autoservicio Roa. 4:38 P.M.",
            subtitle: "Ahora, me acomodo en una de las mesas de la cafetería que está frente al Autoservicio Roa. A mi lado, lavan carros en el gran establecimiento acondicionado para tal fin. Suena música desde muchas partes, pero no logro identificar la fuente hasta pasados unos minutos, tiempo que me toma acondicionar mis oídos al entorno. Del otro lado de la vía, hay 3 locales comerciales con 3 parlantes sonando a todo volumen. Mientras que en algunos suena la radio, en otro suena música. Los carros se parquean sobre la orilla de la vía. Un señor se baja del carro y da las buenas tardes, para posteriormente preguntar si en el local contiguo “venden bombillos de media para este”, señalando su carro. Pasan carros, motos y buses que arrancan y frenan. Pasa una persona pidiendo monedas y “chanceando” a una transeúnte.  ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/ROAMIERCOLES4PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.366799712505,
          5.521460958566166
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(RM16GeoJSON, {
    onEachFeature: function (feature, layer) {
    var RM16Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(RM16Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, tercerahora)
  }
  
  }).addTo(cuatropm)