var HM16GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Monumento Los Hongos. Miércoles, 4:16 p.m.",
            subtitle: "El sonido del tráfico da cuenta de la hora, una hora liviana para la soleada tarde. Es notorio el sonido de autos pasando por ambos sentidos de la Carrera 11. No hay tanta congestión vehicular y el tráfico es fluido sobre ambos carriles. Se escuchan ladridos de perros y también se escucha la leve caída de agua que emana del monumento a “Los Hongos”. Al fondo, los autos y camiones que pasan por la avenida. Suena música desde un taxi que está parqueado en la Estación de Gasolina del lado. Pitidos ante la fila de autos que están detrás de los semáforos, tanto de la avenida como de la 11. Un sonido que es periódico y que depende de los semáforos. A un lado, pasa la vendedora de trapos pregonando: “A la orden, limpiones, base para el celular”. Pasan también motos con el exosto modificado, que resuenan al son desmedido de la aceleración. Sobre la avenida, suena la alarma de un automóvil, que seguramente están arreglando en alguno de los talleres de la zona. En un momento, pasa Manotas caminando por una de las aceras de la calle. Se queda sentado junto a la estación de gasolina. Mira hacia alrededor, chifla y hace ademanes de llamar a un conductor de autobús. Luego sale caminando y pierdo su ubicación, ya que su bafle deja de sonar. ",
            audio_url:"https://selevari.github.io/PareOreja11/Puntos/HONGOS4PM.wav"
        },
        "geometry": {
          "coordinates": [
            -73.36852085339075,
            5.516568274155148
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(HM16GeoJSON, {
    onEachFeature: function (feature, layer) {
    var HM16Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(HM16Popup)
},

pointToLayer: function(feature, latlng){
  return L.circleMarker(latlng, tercerahora)
}

  }).addTo(cuatropm)