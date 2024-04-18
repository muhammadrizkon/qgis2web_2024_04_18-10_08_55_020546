ol.proj.proj4.register(proj4);
ol.proj.get("ESRI:54034").setExtent([12747676.079264, -402118.183721, 12860045.192570, -345481.926860]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PolaRuangTahun20212041_1 = new ol.format.GeoJSON();
var features_PolaRuangTahun20212041_1 = format_PolaRuangTahun20212041_1.readFeatures(json_PolaRuangTahun20212041_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54034'});
var jsonSource_PolaRuangTahun20212041_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolaRuangTahun20212041_1.addFeatures(features_PolaRuangTahun20212041_1);
var lyr_PolaRuangTahun20212041_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolaRuangTahun20212041_1, 
                style: style_PolaRuangTahun20212041_1,
                popuplayertitle: "Pola Ruang Tahun 2021 - 2041",
                interactive: true,
    title: 'Pola Ruang Tahun 2021 - 2041<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_0.png" /> Badan Air<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_1.png" /> Cagar Alam<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_2.png" /> Cagar Alam/Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_3.png" /> Kawasan Ekosistem Mangrove<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_4.png" /> Kawasan Ekosistem Mangrove/Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_5.png" /> Kawasan Hortikultura<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_6.png" /> Kawasan Hutan Lindung<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_7.png" /> Kawasan Hutan Lindung/Kawasan Permukiman Perdesaan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_8.png" /> Kawasan Hutan Produksi Terbatas<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_9.png" /> Kawasan Hutan Produksi Terbatas/Kawasan Permukiman Perdesaan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_10.png" /> Kawasan Hutan Produksi Tetap<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_11.png" /> Kawasan Hutan Produksi Tetap/Kawasan Permukiman Perdesaan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_12.png" /> Kawasan Hutan Produksi Tetap/Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_13.png" /> Kawasan Hutan Produksi yang Dapat Dikonversi<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_14.png" /> Kawasan Hutan Produksi yang Dapat Dikonversi/Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_15.png" /> Kawasan Imbuhan Air Tanah<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_16.png" /> Kawasan Perikanan Budi Daya<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_17.png" /> Kawasan Perkebunan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_18.png" /> Kawasan Permukiman Perdesaan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_19.png" /> Kawasan Permukiman Perkotaan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_20.png" /> Kawasan Pertambangan Batubara<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_21.png" /> Kawasan Pertambangan Mineral Bukan Logam<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_22.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_23.png" /> Kawasan Suaka Alam<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_24.png" /> Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_25.png" /> Sempadan Sungai<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_26.png" /> Suaka Margasatwa<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_27.png" /> Suaka Margasatwa/Kawasan Tanaman Pangan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_28.png" /> Taman Hutan Raya<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_29.png" /> Taman Hutan Raya/Kawasan Permukiman Perdesaan<br />\
    <img src="styles/legend/PolaRuangTahun20212041_1_30.png" /> Taman Hutan Raya/Kawasan Tanaman Pangan<br />'
        });
var format_LahanBakuSawahTahun2023_2 = new ol.format.GeoJSON();
var features_LahanBakuSawahTahun2023_2 = format_LahanBakuSawahTahun2023_2.readFeatures(json_LahanBakuSawahTahun2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54034'});
var jsonSource_LahanBakuSawahTahun2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanBakuSawahTahun2023_2.addFeatures(features_LahanBakuSawahTahun2023_2);
var lyr_LahanBakuSawahTahun2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahanBakuSawahTahun2023_2, 
                style: style_LahanBakuSawahTahun2023_2,
                popuplayertitle: "Lahan Baku Sawah Tahun 2023",
                interactive: true,
    title: 'Lahan Baku Sawah Tahun 2023<br />\
    <img src="styles/legend/LahanBakuSawahTahun2023_2_0.png" /> Lebak<br />\
    <img src="styles/legend/LahanBakuSawahTahun2023_2_1.png" /> Pasang Surut<br />\
    <img src="styles/legend/LahanBakuSawahTahun2023_2_2.png" /> Tadah Hujan<br />'
        });
var format_BatasDesaIndikatif_3 = new ol.format.GeoJSON();
var features_BatasDesaIndikatif_3 = format_BatasDesaIndikatif_3.readFeatures(json_BatasDesaIndikatif_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54034'});
var jsonSource_BatasDesaIndikatif_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesaIndikatif_3.addFeatures(features_BatasDesaIndikatif_3);
var lyr_BatasDesaIndikatif_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesaIndikatif_3, 
                style: style_BatasDesaIndikatif_3,
                popuplayertitle: "Batas Desa Indikatif",
                interactive: true,
                title: '<img src="styles/legend/BatasDesaIndikatif_3.png" /> Batas Desa Indikatif'
            });
var format_BatasKecamatan_4 = new ol.format.GeoJSON();
var features_BatasKecamatan_4 = format_BatasKecamatan_4.readFeatures(json_BatasKecamatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54034'});
var jsonSource_BatasKecamatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_4.addFeatures(features_BatasKecamatan_4);
var lyr_BatasKecamatan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_4, 
                style: style_BatasKecamatan_4,
                popuplayertitle: "Batas Kecamatan",
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_4.png" /> Batas Kecamatan'
            });
var format_KiosTani_5 = new ol.format.GeoJSON();
var features_KiosTani_5 = format_KiosTani_5.readFeatures(json_KiosTani_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'ESRI:54034'});
var jsonSource_KiosTani_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KiosTani_5.addFeatures(features_KiosTani_5);
var lyr_KiosTani_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KiosTani_5, 
                style: style_KiosTani_5,
                popuplayertitle: "Kios Tani",
                interactive: true,
                title: '<img src="styles/legend/KiosTani_5.png" /> Kios Tani'
            });

lyr_OSMStandard_0.setVisible(true);lyr_PolaRuangTahun20212041_1.setVisible(true);lyr_LahanBakuSawahTahun2023_2.setVisible(true);lyr_BatasDesaIndikatif_3.setVisible(true);lyr_BatasKecamatan_4.setVisible(true);lyr_KiosTani_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_PolaRuangTahun20212041_1,lyr_LahanBakuSawahTahun2023_2,lyr_BatasDesaIndikatif_3,lyr_BatasKecamatan_4,lyr_KiosTani_5];
lyr_PolaRuangTahun20212041_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'KKOP_1': 'KKOP_1', 'KP2B_2': 'KP2B_2', 'KRB_03': 'KRB_03', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LahanBakuSawahTahun2023_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'Qname_2023': 'Qname_2023', 'Jenis_Laha': 'Jenis_Laha', 'LUAS': 'LUAS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LUAS_UP': 'LUAS_UP', });
lyr_BatasDesaIndikatif_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'luas': 'luas', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Le_3': 'Shape_Le_3', 'Shape_Le_4': 'Shape_Le_4', 'Shape_Area': 'Shape_Area', });
lyr_BatasKecamatan_4.set('fieldAliases', {'FID_BATAS_': 'FID_BATAS_', 'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KiosTani_5.set('fieldAliases', {'Name': 'Name', 'X': 'X', 'Y': 'Y', });
lyr_PolaRuangTahun20212041_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'KKOP_1': 'TextEdit', 'KP2B_2': 'TextEdit', 'KRB_03': 'TextEdit', 'CAGBUD': 'TextEdit', 'RESAIR': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LahanBakuSawahTahun2023_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'Qname_2023': 'TextEdit', 'Jenis_Laha': 'TextEdit', 'LUAS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LUAS_UP': 'TextEdit', });
lyr_BatasDesaIndikatif_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID_4': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'luas': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Le_3': 'TextEdit', 'Shape_Le_4': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasKecamatan_4.set('fieldImages', {'FID_BATAS_': 'TextEdit', 'OBJECTID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KiosTani_5.set('fieldImages', {'Name': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_PolaRuangTahun20212041_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'WADMPR': 'no label', 'WADMKK': 'no label', 'KKOP_1': 'no label', 'KP2B_2': 'no label', 'KRB_03': 'no label', 'CAGBUD': 'no label', 'RESAIR': 'no label', 'LUASHA': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LahanBakuSawahTahun2023_2.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'Qname_2023': 'no label', 'Jenis_Laha': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'LUAS_UP': 'no label', });
lyr_BatasDesaIndikatif_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'luas': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Le_3': 'no label', 'Shape_Le_4': 'no label', 'Shape_Area': 'no label', });
lyr_BatasKecamatan_4.set('fieldLabels', {'FID_BATAS_': 'no label', 'OBJECTID': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KiosTani_5.set('fieldLabels', {'Name': 'inline label - visible with data', 'X': 'no label', 'Y': 'no label', });
lyr_KiosTani_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});