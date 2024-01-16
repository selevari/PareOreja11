var BM11GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Bosque de la República. Miércoles, 12:33 p.m",
            subtitle: "Me siento junto a la grada. Las palomas llegan a mí, porque estoy comiendo maní. Un grupo de personas se amontona en la zona verde del parque, para separar unos perros que se empiezan a morder. El perro más afectado es separado por su dueña, quien lo aparta para revisarlo. El perro llora mucho. La señora, se ve a lo lejos, le reclama al dueño del perro que atacó a su mascota. Sobre la Calle 13, suenan tanto el perifoneo del restaurante, como la radio que sale del parlante del “Punto de fábrica”. Pasan carros, motos y buses. Escucho conversaciones entre transeúntes. Escucho también el gorjeo de palomas, pero no escucho el canto de los pájaros. Nadie juega en las canchas.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/BOSQUEMIERCOLES12PM.wav"
        },
        "geometry": {
          "coordinates": [
            -73.3647406669218,
            5.526935871563595
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(BM11GeoJSON, {
    onEachFeature: function (feature, layer) {
    var BM11Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(BM11Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, segundahora)
  }
  
  }).addTo(onceam)