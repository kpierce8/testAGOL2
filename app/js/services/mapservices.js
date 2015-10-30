define([
	'esri/layers/FeatureLayer',
	'esri/renderers/SimpleRenderer',
	'utils/symbolUtil']
	, function(FeatureLayer, SimpleRenderer, symbolUtil) {
		function _loadServices(config){

			var CENSUS_URL = 'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/CensusLaborDemo/FeatureServer/1'
			var REQUEST_URL = 'http://services.arcgis.com/rcya3vExsaVBGUDp/arcgis/rest/services/testTrees/FeatureServer/0'

			

			var layers = [];
			var censusLayer = new FeatureLayer(CENSUS_URL, {
				id: 'Census'
			});
			var	requestLayer = new FeatureLayer(REQUEST_URL, {
				id: 'Requests',
				mode: FeatureLayer.MODE_ONDEMAND,
				outFields: ['*']
			});

			var renderer = new SimpleRenderer(symbolUtil.renderSymbol());
		censusLayer.setRenderer(renderer);

	layers.push(censusLayer);
	layers.push(requestLayer);
	return layers;
	}
	return {
		loadServices: _loadServices
		};

	});


// 