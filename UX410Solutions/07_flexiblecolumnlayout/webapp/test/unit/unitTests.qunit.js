/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student00/sap/training/flexiblecolumnlayout/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
