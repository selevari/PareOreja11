var JM20GeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            title: "Paradero Universidad Juan de Castellanos. Miércoles, 7:28 p.m",
            subtitle: "Me paro sobre el paradero de la Juan. Suena música decembrina en el almacén de ropa deportiva. Sigue haciendo frío. Algunas personas pasan caminando, así como algunas otras esperan bus. El bus para y abre sus puertas para recogerlos. Otras personas, pasan arrastrando sus pasos por la ciclovía, para luego cruzar la calle y dar con el container de basura. Ahí, empiezan a rebuscar entre las bolsas. Suena el container. Siguen pasando automóviles y buses. Sigue caminando la gente. Sigue sonando música de diciembre. Sigue haciendo frío. Ventea y las hojas de los árboles se mueven. ",
            audio_url: "https://selevari.github.io/PareOreja11/Puntos/JUANMIERCOLES7PM.wav",
        },
        "geometry": {
          "coordinates": [
            -73.36604022506275,
            5.524479513350769
          ],
          "type": "Point"
        }
      }
    ]
  }

  L.geoJSON(JM20GeoJSON, {
    onEachFeature: function (feature, layer) {
    var JM20Popup =
        "<h3>" + feature.properties.title + "</h3>" +
        "<h5>"  + feature.properties.subtitle + "</h5>" +
        "<audio src = " + feature.properties.audio_url + " controls />"
    layer.bindPopup(JM20Popup)
  },
  
  pointToLayer: function(_feature, latlng){
    return L.circleMarker(latlng, cuartahora)
  }
  
  }).addTo(ochopm)