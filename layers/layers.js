var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SUBCUENCASJUNIN_1 = new ol.format.GeoJSON();
var features_SUBCUENCASJUNIN_1 = format_SUBCUENCASJUNIN_1.readFeatures(json_SUBCUENCASJUNIN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUBCUENCASJUNIN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUBCUENCASJUNIN_1.addFeatures(features_SUBCUENCASJUNIN_1);
var lyr_SUBCUENCASJUNIN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUBCUENCASJUNIN_1, 
                style: style_SUBCUENCASJUNIN_1,
                interactive: true,
                title: '<img src="styles/legend/SUBCUENCASJUNIN_1.png" /> SUBCUENCAS-JUNIN'
            });
var lyr_AP_23150_FBD_F6960_RT1dem_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "AP_23150_FBD_F6960_RT1.dem",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AP_23150_FBD_F6960_RT1dem_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8433990.436398, -1267302.356327, -8352976.951188, -1192677.797599]
                            })
                        });
var lyr_acc_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/acc_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8433990.436398, -1267302.356327, -8352976.951188, -1192677.797599]
                            })
                        });
var lyr_dir_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "dir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dir_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8433990.436398, -1267302.356327, -8352976.951188, -1192677.797599]
                            })
                        });
var lyr_fill_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/fill_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8433990.436398, -1267302.356327, -8352976.951188, -1192677.797599]
                            })
                        });
var lyr_c_acc_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_acc_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8381058.294560, -1262040.144172, -8357336.341808, -1226231.845682]
                            })
                        });
var lyr_c_cauce_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_cauce",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_cauce_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8381058.294560, -1262040.144172, -8357336.341808, -1226231.845682]
                            })
                        });
var format_c_curvas_8 = new ol.format.GeoJSON();
var features_c_curvas_8 = format_c_curvas_8.readFeatures(json_c_curvas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_curvas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_curvas_8.addFeatures(features_c_curvas_8);
var lyr_c_curvas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_curvas_8, 
                style: style_c_curvas_8,
                interactive: true,
                title: '<img src="styles/legend/c_curvas_8.png" /> c_curvas'
            });
var lyr_c_fill_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_fill_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8381058.294560, -1262040.144172, -8357336.341808, -1226231.845682]
                            })
                        });
var lyr_c_reclass_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_reclass_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8381058.294560, -1262040.144172, -8357336.341808, -1226231.845682]
                            })
                        });
var format_c_rios_11 = new ol.format.GeoJSON();
var features_c_rios_11 = format_c_rios_11.readFeatures(json_c_rios_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_rios_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_rios_11.addFeatures(features_c_rios_11);
var lyr_c_rios_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_rios_11, 
                style: style_c_rios_11,
                interactive: true,
                title: '<img src="styles/legend/c_rios_11.png" /> c_rios'
            });
var format_c_shp_12 = new ol.format.GeoJSON();
var features_c_shp_12 = format_c_shp_12.readFeatures(json_c_shp_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_shp_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_shp_12.addFeatures(features_c_shp_12);
var lyr_c_shp_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_shp_12, 
                style: style_c_shp_12,
                interactive: true,
                title: '<img src="styles/legend/c_shp_12.png" /> c_shp'
            });
var format_Centroides_13 = new ol.format.GeoJSON();
var features_Centroides_13 = format_Centroides_13.readFeatures(json_Centroides_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroides_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroides_13.addFeatures(features_Centroides_13);cluster_Centroides_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Centroides_13
});
var lyr_Centroides_13 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Centroides_13, 
                style: style_Centroides_13,
                interactive: true,
                title: '<img src="styles/legend/Centroides_13.png" /> Centroides'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SUBCUENCASJUNIN_1.setVisible(true);lyr_AP_23150_FBD_F6960_RT1dem_2.setVisible(true);lyr_acc_3.setVisible(true);lyr_dir_4.setVisible(true);lyr_fill_5.setVisible(true);lyr_c_acc_6.setVisible(true);lyr_c_cauce_7.setVisible(true);lyr_c_curvas_8.setVisible(true);lyr_c_fill_9.setVisible(true);lyr_c_reclass_10.setVisible(true);lyr_c_rios_11.setVisible(true);lyr_c_shp_12.setVisible(true);lyr_Centroides_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SUBCUENCASJUNIN_1,lyr_AP_23150_FBD_F6960_RT1dem_2,lyr_acc_3,lyr_dir_4,lyr_fill_5,lyr_c_acc_6,lyr_c_cauce_7,lyr_c_curvas_8,lyr_c_fill_9,lyr_c_reclass_10,lyr_c_rios_11,lyr_c_shp_12,lyr_Centroides_13];
lyr_SUBCUENCASJUNIN_1.set('fieldAliases', {'fid': 'fid', 'fid_1': 'fid_1', 'OBJECTID': 'OBJECTID', 'CUENCAS': 'CUENCAS', 'CUEN_MAY': 'CUEN_MAY', 'perim_km': 'perim_km', 'Area_km2': 'Area_km2', 'L_t_cor_km': 'L_t_cor_km', 'P_med_Sc': 'P_med_Sc', 'Kc': 'Kc', 'Ff': 'Ff', 'Dd': 'Dd', 'Es': 'Es', 'A_med_km': 'A_med_km', 'Lcp_km': 'Lcp_km', 'am_2': 'am_2', 'am_5': 'am_5', 'am_10': 'am_10', 'am_25': 'am_25', 'am_50': 'am_50', 'am_75': 'am_75', 'am_100': 'am_100', 'am_200': 'am_200', 'am_500': 'am_500', 'am_1000': 'am_1000', 'd_ag_m3': 'd_ag_m3', 'd_hum_m3': 'd_hum_m3', 'd_total_m3': 'd_total_m3', 'oferta_m3': 'oferta_m3', 'balance_m3': 'balance_m3', 'NIVEL_5': 'NIVEL_5', 'NIVEL_6': 'NIVEL_6', 'NIVEL_7': 'NIVEL_7', 'NOMB_UH_5': 'NOMB_UH_5', 'NOMB_UH_6': 'NOMB_UH_6', 'NOMB_UH_7': 'NOMB_UH_7', 'N_C_Cons': 'N_C_Cons', 'N_C_Agr': 'N_C_Agr', 'Area_ha': 'Area_ha', });
lyr_c_curvas_8.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CONTOUR': 'CONTOUR', 'LENGTH': 'LENGTH', });
lyr_c_rios_11.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_c_shp_12.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', 'Área': 'Área', 'Perímetro': 'Perímetro', });
lyr_Centroides_13.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', 'Área': 'Área', 'Perímetro': 'Perímetro', });
lyr_SUBCUENCASJUNIN_1.set('fieldImages', {'fid': 'TextEdit', 'fid_1': 'Range', 'OBJECTID': 'TextEdit', 'CUENCAS': 'TextEdit', 'CUEN_MAY': 'TextEdit', 'perim_km': 'TextEdit', 'Area_km2': 'TextEdit', 'L_t_cor_km': 'TextEdit', 'P_med_Sc': 'TextEdit', 'Kc': 'TextEdit', 'Ff': 'TextEdit', 'Dd': 'TextEdit', 'Es': 'TextEdit', 'A_med_km': 'TextEdit', 'Lcp_km': 'TextEdit', 'am_2': 'TextEdit', 'am_5': 'TextEdit', 'am_10': 'TextEdit', 'am_25': 'TextEdit', 'am_50': 'TextEdit', 'am_75': 'TextEdit', 'am_100': 'TextEdit', 'am_200': 'TextEdit', 'am_500': 'TextEdit', 'am_1000': 'TextEdit', 'd_ag_m3': 'TextEdit', 'd_hum_m3': 'TextEdit', 'd_total_m3': 'TextEdit', 'oferta_m3': 'TextEdit', 'balance_m3': 'TextEdit', 'NIVEL_5': 'TextEdit', 'NIVEL_6': 'TextEdit', 'NIVEL_7': 'TextEdit', 'NOMB_UH_5': 'TextEdit', 'NOMB_UH_6': 'TextEdit', 'NOMB_UH_7': 'TextEdit', 'N_C_Cons': 'TextEdit', 'N_C_Agr': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_c_curvas_8.set('fieldImages', {'fid': '', 'ID': '', 'CONTOUR': '', 'LENGTH': '', });
lyr_c_rios_11.set('fieldImages', {'SEGMENT_ID': '', 'NODE_A': '', 'NODE_B': '', 'BASIN': '', 'ORDER': '', 'ORDER_CELL': '', 'LENGTH': '', });
lyr_c_shp_12.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', 'Área': 'TextEdit', 'Perímetro': 'TextEdit', });
lyr_Centroides_13.set('fieldImages', {'fid': '', 'ID': '', 'VALUE': '', 'NAME': '', 'Área': '', 'Perímetro': '', });
lyr_SUBCUENCASJUNIN_1.set('fieldLabels', {'fid': 'no label', 'fid_1': 'no label', 'OBJECTID': 'no label', 'CUENCAS': 'no label', 'CUEN_MAY': 'no label', 'perim_km': 'no label', 'Area_km2': 'no label', 'L_t_cor_km': 'no label', 'P_med_Sc': 'no label', 'Kc': 'no label', 'Ff': 'no label', 'Dd': 'no label', 'Es': 'no label', 'A_med_km': 'no label', 'Lcp_km': 'no label', 'am_2': 'no label', 'am_5': 'no label', 'am_10': 'no label', 'am_25': 'no label', 'am_50': 'no label', 'am_75': 'no label', 'am_100': 'no label', 'am_200': 'no label', 'am_500': 'no label', 'am_1000': 'no label', 'd_ag_m3': 'no label', 'd_hum_m3': 'no label', 'd_total_m3': 'no label', 'oferta_m3': 'no label', 'balance_m3': 'no label', 'NIVEL_5': 'no label', 'NIVEL_6': 'no label', 'NIVEL_7': 'no label', 'NOMB_UH_5': 'no label', 'NOMB_UH_6': 'no label', 'NOMB_UH_7': 'no label', 'N_C_Cons': 'no label', 'N_C_Agr': 'no label', 'Area_ha': 'no label', });
lyr_c_curvas_8.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CONTOUR': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_11.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'no label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_c_shp_12.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', 'Área': 'no label', 'Perímetro': 'no label', });
lyr_Centroides_13.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', 'Área': 'no label', 'Perímetro': 'no label', });
lyr_Centroides_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});