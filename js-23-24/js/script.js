requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'tmpl': {
            exports: 'tmpl'
        }
	}
});


require(
	[
	'model',
	'controller',
	'view',
	'jquery'
	],
	function (Model, Controller, View, $) {
		var firstToDoList = ['buy bread', 'buy milk', 'buy butter', 'make dinner'];

		var model = new Model(firstToDoList);

		var view = new View(model);

		var controller = new Controller(model, view);


	}
);
