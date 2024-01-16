var HS7GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Monumento Los Hongos. Sábado, 7:32 a.m",
            subtitle: "Amanece en la Carrera 11. El tráfico sigue siendo pesado sobre la avenida. Para un carro haciendo perifoneo, vendiendo tamales y envueltos. Se mete hacia el Barrio Surinama y ahí pierdo su rastro sonoro. La fuente del monumento ya está encendida. Me pregunto a qué hora la encenderán. No hay tráfico tan pesado sobre la Carrera 11, aunque pasen varios buses, taxis, carros y motos. A esta hora, están cerrados todos los locales comerciales del sector. Estarán abriendo a eso de las 8 de la mañana. Escucho chiflidos y risas sobre la avenida. Provienen de los “trapitos”, las personas que limpian vidrios cuando el semáforo de la avenida está en rojo. Le lanzan el chiflido a unos chicos que se sientan junto al monumento, para luego reunirse por un momento y “abrirse”. Vuelve a pasar el carro haciendo el perifoneo de los tamales, pero esta vez entra a tanquear en la estación de gasolina.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/HONGOSS%C3%81BADO8AM.wav",   
        },
        "geometry": {
          "coordinates": [
            -73.3684916330441,
            5.516414969830407
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(HS7GeoJSON, {
    onEachFeature: function (feature, layer) {
    var HS7Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(HS7Popup)
},

pointToLayer: function(feature, latlng){
  return L.circleMarker(latlng, sabadoprimerahora)
}

  }).addTo(sabadosieteam)