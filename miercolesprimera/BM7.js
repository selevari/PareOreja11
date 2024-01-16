BM7GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Bosque de la República. Miércoles, 7:39 a.m",
            subtitle: "Me siento en la grada. En las canchas no están jugando. Algunas personas hacen ejercicio en las canchas, trotando o elongando sobre las gradas. El “punto de fábrica” ya se encuentra abierto, con el parlante afuera. Me impresiona saber que a esta hora ya está abierto. Escucho pitidos y la alarma de reversa del carro de la basura. Suena “La Sonora” en la radio del parlante del punto de fábrica. Pasan buses, carros y motos por la 11. Algunos carros pasan por la calle 13, que ya está reparchada. Algunos ladridos de perros y cantes de pájaros son audibles a esta hora. “Cuánto le debo, veci”, dicen detrás de mí, le dicen a la señora que está dentro de la caseta. Varias personas conversan, paradas sobre las casetas o los puestos de venta en la esquina. Toman tinto y fuman.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/BOSQUEMIERCOLES7AM.wav",
            subtitle: "Me siento en la grada. En las canchas no están jugando. Algunas personas hacen ejercicio en las canchas, trotando o elongando sobre las gradas. El “punto de fábrica” ya se encuentra abierto, con el parlante afuera. Me impresiona saber que a esta hora ya está abierto. Escucho pitidos y la alarma de reversa del carro de la basura. Suena “La Sonora” en la radio del parlante del punto de fábrica. Pasan buses, carros y motos por la 11. Algunos carros pasan por la calle 13, que ya está arreglada. Algunos ladridos de perros y cantes de pájaros son audibles a esta hora. “Cuánto le debo, veci”, dicen detrás de mí, le dicen a la señora que está dentro de la caseta. Varias personas conversan, paradas sobre las casetas o los puestos de venta en la esquina. Toman tinto y fuman."
        },
        "geometry": {
          "coordinates": [
            -73.3647628616064,
            5.5268076863193585
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(BM7GeoJSON, {
    onEachFeature: function (feature, layer) {
    var BM7Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(BM7Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, primerahora)
  }
  
  }).addTo(sieteam)