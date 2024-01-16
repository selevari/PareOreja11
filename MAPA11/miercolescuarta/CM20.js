var CM20GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Calle 4. Miércoles, 8:21 p.m",
            subtitle: "Aún hay tráfico, a pesar de la hora. Tunja se duerme temprano. Pasan buses de vuelta, llenos de gente que va a sus casas. Buses llenos hacia el sur, buses vacíos hacia el centro o el norte. Es muy usual escuchar el golpe de las puertas de los taxis que se paran al frente, así como también el sonido de las puertas de los buses cuando se abren o se cierran. Taxis que paran al frente para repostar, que paran cerca al asadero de pollos o a la panadería. Se escuchan también ladridos de perros. No distingo la fuente. Se escucha la música del bar del frente, mientras despide buses multicolores. El sonido de los buses de Tunja es muy distintivo. Se escucha el corte de las tijeras que trozan el pollo en el asadero. Mucha gente hace fila para comprar pollo. “La 11 suena a trabajo”. El trabajo duro, suena duro. Los buses y los carros aceleran, aprovechando el poco tráfico, con el afán de llegar a casa. También escucho doble pitido de los taxis, haciendo una señal sonora para buscar “carrera”.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/CASAMIERCOLES8PM.wav"
        },
        "geometry": {
          "coordinates": [
            -73.36750976730474,
            5.518575159107996
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(CM20GeoJSON, {
    onEachFeature: function (feature, layer) {
    var CM20Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(CM20Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, cuartahora)
  }
  
  }).addTo(ochopm)