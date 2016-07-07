(function(){
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Good gem that you should buy one!',
		canPurchase: true,
		soldOut: true
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'Better gem that you should always buy one',
		canPurchase: false
	}]
})();