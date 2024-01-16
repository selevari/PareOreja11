var BS16GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Bosque de la República. Sábado, 4:12 p.m",
            subtitle: "Me siento sobre una de las gradas de la cancha de baloncesto del Bosque. Le doy la espalda a la 11. En este punto, la 11 se reduce a un carril, que viene desde el centro y se convierte desde la Calle 13 hasta la altura de Los Hongos en doble vía, partida por una ciclorruta. En las canchas juegan baloncesto y microfútbol. Se escucha el pivoteo del la bola de baloncesto y su impacto con el tablero. También el golpe de los balones de microfútbol contra las rejas instaladas hacia las líneas finales de las canchas. Se escucha el arrastre de los zapatos de las/los jugadoras/es. Gente que corre sobre la peatonal que atraviesa el parque." + "En una casetica que está a mis espaldas, suena música y a un lado, sobre la calle 13, en un local de venta de zapatos suena un banner. “PUNTO DE FÁBRICA”. Sobre la 11, los buses y autos pasan rápido en un sentido, nunca se forma trancón ahí. Suenan gritos en las canchas. “Pásela”, gritan por ahí. Chiflidos dentro de la cancha. A estas horas no hay campeonatos deportivos, pero aquí se suele jugar los fines de semana. Risas de familias enteras que pasan por la acera que bordea el parque. A pesar de estar en el parque, no alcanzo a percibir geófonos. Estando más tiempo y apelando a mi atención, empiezo a escuchar silbidos de pájaros, que se confunden con el chirreo del columpio que está en el parque. Los empiezo a escuchar más claro, así como empiezo a escuchar el leve sonido de las hojas de los grandes árboles que se plantan sobre El Bosque. ", 
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/BOSQUES%C3%81BADO4PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36471701034996,
          5.527120297418691
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(BS16GeoJSON, {
    onEachFeature: function (feature, layer) {
    var BS16Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(BS16Popup)
},

pointToLayer: function(feature, latlng){
  return L.circleMarker(latlng, sabadotercerahora)
}

  }).addTo(sabadocuatropm)