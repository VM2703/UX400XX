/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["sap/training/components/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
