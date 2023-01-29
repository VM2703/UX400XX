/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student00saptraining/dynamicpage/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
