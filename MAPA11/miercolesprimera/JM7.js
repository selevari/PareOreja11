var JM7GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Paradero Universidad Juan de Castellanos. Miércoles, 7:53 a.m",
            subtitle: "Algunos estudiantes caminan frente a mí, van llegando a clase de 8. Algunos otros se amontonan sobre la puerta del autobús de la Juan, que está parqueado al otro lado de la vía. Ese autobús los lleva a los otros campus de la universidad, que se encuentran por fuera de la ciudad. En la obra de “Gaseosas”, ya hay trabajadores, ya echan sierra, ya echan mazo. Hay carros que van y vienen, que desvían en su mayoría hacia la Avenida Colón. Escucho pitidos para apresurar, pitidos también para saludar a alguna persona o conductor que pasa. Otro bus de la Juan se parquea frente a mí. El bus me tapa la visibilidad, así que empiezo a hacer un ejercicio de sólo audición, al perder la referencia de lo que veo. Personas pasan caminando, con prisa. La señora de los jugos habla con alguien más, para luego despedirle y desearle suerte. Escucho por ahí puertas que se abren y que luego se cierran, después de que un carro arrancara. El carro deja a alguien y se va. Empieza el desfile retardado de los pitazos en el semáforo.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/JUANMIERCOLES7AM.wav",
            color: "green"
        },
        "geometry": {
          "coordinates": [
            -73.3659189774908,
            5.524695695032776
          ],
          "type": "Point"
        }
      }
    ]
  }
  L.geoJSON(JM7GeoJSON, {
    onEachFeature: function (feature, layer) {
    var JM7Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(JM7Popup)
},

pointToLayer: function(feature, latlng){
  return L.circleMarker(latlng, primerahora)
}

  }).addTo(sieteam)