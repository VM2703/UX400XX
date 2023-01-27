/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["sap/training/propertybinding/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
