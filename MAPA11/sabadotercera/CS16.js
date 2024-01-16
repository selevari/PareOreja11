var CS16GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Calle 4. Sábado, 4:22 p.m",
            subtitle: "Ahora el tráfico es liviano. Una familia junto a la acera espera un taxi. El padre emite chiflidos dirigidos hacia un taxi que pasa por el otro sentido. Acto seguido, el taxi emite un doble pitido y da la vuelta en la “U”, para recoger a la familia. Pasan motos, taxis y buses. La vía está tranquila y puedo escuchar cómo en el asadero de pollos hacen uso de las tijeras para cortar el pollo. Pasa un vecino con unas cervezas y el vecino de la carnicería le grita “Ola mano, ¿ya va a empezar?”. “Relájese papi”, menciona el vecino. Al rato, pasa por la 11 el carro que vende mazamorra paisa y arroz con leche. Es un automotor particular, como una especie de mototaxi que encima lleva la cabeza de una vaca. Desde la cabeza de la vaca, un parlante expide un perifoneo bastante particular. Al mismo rato, escucho cómo suena el horno de pan desde la panadería. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/CASAS%C3%81BADO4PM.wav"
    },
        "geometry": {
          "coordinates": [
            -73.3674619971127,
          5.518608337829349
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(CS16GeoJSON, {
    onEachFeature: function (feature, layer) {
    var CS16Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(CS16Popup)
},

pointToLayer: function(feature, latlng){
  return L.circleMarker(latlng, sabadotercerahora)
}

  }).addTo(sabadocuatropm)