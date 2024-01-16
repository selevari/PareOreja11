var RutaGeoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            color: "blue" 
        },
        "geometry": {
          "coordinates": [
            [
              -73.36857971556746,
              5.516265377832468
            ],
            [
              -73.36845136197006,
              5.51681498313134
            ],
            [
              -73.36835206956404,
              5.5170512168307795
            ],
            [
              -73.36806844242388,
              5.517501568505807
            ],
            [
              -73.36756800954814,
              5.518279666487842
            ],
            [
              -73.36754326261382,
              5.518408629784176
            ],
            [
              -73.36739654865622,
              5.519583338563876
            ],
            [
              -73.36716544672724,
              5.520546598927666
            ],
            [
              -73.36704591962781,
              5.5209462461100856
            ],
            [
              -73.36676320272966,
              5.521982650807388
            ],
            [
              -73.36652030924466,
              5.522803093273552
            ],
            [
              -73.36627451190297,
              5.52404228740545
            ],
            [
              -73.36619499602097,
              5.524353924056456
            ],
            [
              -73.36603581294405,
              5.524662559804682
            ],
            [
              -73.36573893789826,
              5.525439929158011
            ],
            [
              -73.36549451389288,
              5.526034437088043
            ],
            [
              -73.36513899231707,
              5.52663424492863
            ],
            [
              -73.36488629009766,
              5.526831123376567
            ],
            [
              -73.36469229404909,
              5.527425949097264
            ],
            [
              -73.3645516100984,
              5.5279358917698715
            ],
            [
              -73.36442964398977,
              5.52830714844481
            ]
          ],
          "type": "LineString"
        }
      }
    ]
  }

L.geoJSON(RutaGeoJSON, {
    style: estiloruta,
    onEachFeature: function (feature, layer) {
        console.log(feature)
        console.log(layer)
        layer.bindPopup("Esta es la Carrera 11")
    }
}).addTo(map)