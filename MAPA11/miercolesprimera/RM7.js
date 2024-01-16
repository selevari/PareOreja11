RM7GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Carrera 11 con Carrera 10. Frente al Autoservicio Roa. 8:28 A.M.",
            subtitle: "Empieza a sonar música desde el Autoservicio Roa. Se emite desde un bafle que está colgado sobre la puerta. Las personas pasan caminando; algunos van hacia el centro, mientras que otros caminan sobre la ciclovía, con repuestos en la mano. Algunas personas se saludan sobre la acera, mientras que otros esperan bus. Los locales comerciales de alrededor están cerrados. El tráfico es liviano. Algunas personas ya trabajan sobre la vía, en algún carro. Otros, barren el frente de sus locales. A mi lado, empiezan a abrir un local. El trabajador le hace un resumen al jefe, contándole cómo le fue ayer. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/ROAMIERCOLES8AM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36674255646504,
            5.521702709901585, 
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(RM7GeoJSON, {
    onEachFeature: function (feature, layer) {
    var RM7Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(RM7Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, primerahora)
  }
  
  }).addTo(sieteam)