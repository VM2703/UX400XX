/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"saptraining./layout/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
