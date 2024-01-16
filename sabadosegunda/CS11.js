var CS11GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Calle 4. Sábado, 12:40 p.m",
            subtitle: "Escucho el sonido de la estufa, del vapor que se origina en el restaurante que está ubicado en la cuadra. Escucho algunas conversaciones indistintas sobre la acera. Escucho también el sonido de la caja de los autos que se cuadran sobre la calle, que dan reversa para hacerse un espacio en la cuadra, que está ocupada de carros parqueados. Pasa gente que saluda a Jotica, quien está vendiendo aguacates. Se escuchan pitidos y aceleraciones, chiflidos para saludar y silbidos para pasar el rato, como los que hace Jotica. Llegan personas a comprarle aguacates. “3 en 10, 2 en 20, ¿son pa hoy?” Pregunta Jotica, mientras señala los aguacates que tiene disponibles. Pasan y paran buses, suena el sensor de la puerta de estos. Un sonido que se repite cuando alguien se para en la puerta del bus y empieza a marcar repetitivamente. Se vierte agua en la calle mediante la caneca de la carnicería. Luego el vecino pone la caneca fuerte, frente a la carnicería, para guardarse un espacio y que pueda parquear luego su camioneta. Pasan personas hablando por teléfono. Dentro de la carnicería suena la sierra que corta hueso, así como también una balada estadounidense.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/CASAS%C3%81BADO12PM.wav"
        },
        "geometry": {
          "coordinates": [
            -73.36748631321151,
          5.518516968809905
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(CS11GeoJSON, {
    onEachFeature: function (feature, layer) {
    var CS11Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(CS11Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadosegundahora)
  }
  
  }).addTo(sabadoonceam)