(function(){
	var app = angular.module('gemStore', []);
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2,
		description: 'Good gem that you should buy one!',
		canPurchase: true,
		soldOut: true,
		images:[
			"images/gem-01.gif",
			"images/gem-02.gif",
			"images/gem-03.gif"
		]
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'Better gem that you should always buy one',
		canPurchase: false,
		images:[
			"images/gem-04.gif",
			"images/gem-05.gif",
			"images/gem-06.gif"
		]
	}]
})();