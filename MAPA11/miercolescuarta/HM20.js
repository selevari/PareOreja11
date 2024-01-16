var HM20GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Monumento Los Hongos. Miércoles, 7:40 p.m.",
            subtitle: "La fuente está encendida. Algunos carros se acercan a “tanquear” en la estación de gasolina. Buses, carros y motos pasan a toda velocidad, luego de haber superado los semáforos. Chicos pasan derrapando en bicicletas pequeñas. El tráfico en este punto es continuo, por ambos sentidos. Es intermitente, debido al orden que promueven los semáforos. Algunos taxistas, en la estación de gasolina, escurren trapos sobre un balde, para luego pasarlos sobre sus autos. Sigue haciendo mucho viento. Viento que hace mover algunas de las hojas de los árboles plantados a lo largo de la ciclorruta. Algunos pitidos suenan, cuando los carros se demoran en arrancar. Puertas que se abren y se cierran. Puertas tanto de buses, para dejar o recoger pasajeros, como de automóviles. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/HONGOSMIERCOLES7PM.wav"
        },
        "geometry": {
          "coordinates": [
            -73.36837383147295,
          5.516473833231402
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(HM20GeoJSON, {
    onEachFeature: function (feature, layer) {
    var HM20Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(HM20Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, cuartahora)
  }
  
  }).addTo(ochopm)