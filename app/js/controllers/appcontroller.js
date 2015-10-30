define([
	'controllers/mapcontroller',
	'widgets/edit/editTools'
	], function(MapController, EditTools) {
		function mapLoaded(map) {
			var editTools = new EditTools({
				map:map
			}, 'map-tools');
			console.debug('map has been loaded ', map);
		}
		function init(config){
			var mapCtrl = new MapController(config);
			mapCtrl.load().then(mapLoaded)
		}
		return {
			init: init
		};
	});