define([
	'esri/layers/FeatureLayer',
	'esri/renderers/SimpleRenderer',
	'utils/symbolUtil']
	, function(FeatureLayer, SimpleRenderer, symbolUtil) {
		function loadServices(){
			var layers = [];
			var censusLayer;
			var renderer;
			censusLayer = new FeatureLayer(
				'http://services.arcgis.com/V6ZHFr6zdgNZuVG0/' +
				'arcgis/rest/services/' +
				'CensusLaborDemo/FeatureServer/1'
			);

	renderer = new SimpleRenderer(symbolUtil.renderSymbol());
	censusLayer.setRenderer(renderer);

	layers.push(censusLayer);
	return layers;
	}
	return {
		loadServices: loadServices
		};

	});