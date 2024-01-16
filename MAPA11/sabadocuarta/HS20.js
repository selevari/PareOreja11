var HS20GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Monumento Los Hongos. Sábado, 7:54 p.m.",
            subtitle: "Me paro en la esquina entre la Avenida Oriental y la Carrera 11ª. Esta vez me acompaña mi mamá. El tráfico es liviano por la Carrera 11, mientras que por la avenida hay un número considerable de carros. Mi mamá me habla del monumento, luego de que le comentara que había visto que era del 74’. “Esos hongos los han venido arreglando, pintando. Los originales eran como piedras”. La fuente sigue encendida, aunque con una potencia de caída de agua más débil. No escucho pitidos, a pesar de que se acumulen carros en los semáforos. Eso cambia hasta que un camión pasa en amarillo el semáforo de la vía que viene del Barrio San Francisco. El camión queda en medio de la avenida, trabado entre los carros que fluyen por el carril que va en sentido norte-sur. Se escucha una orquesta de pitidos fuerte. Escucho perros ladrando en alguna parte del barrio y lo que más me sorprende, es que puedo escuchar el sonido de un pájaro, que yace sobre uno de los cables de los postas de luz. Es un canto muy claro. Pienso en que no podría haberlo escuchado en horas de la mañana. Es un momento íntimo el que comparto con mi mamá, escuchando el canto del pájaro. Al volver, empiezo a escuchar el sonido de las escobas que barren las aceras del frente de los locales.",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/HONGOSS%C3%81BADO8PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36847633591886,
          5.516508529208579
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(HS20GeoJSON, {
    onEachFeature: function (feature, layer) {
    var HS20Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(HS20Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, sabadocuartahora)
  }
  
  }).addTo(sabadoochopm)