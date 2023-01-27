/*global QUnit*/

sap.ui.define([
	"student00sap.training./views/controller/MyXMLView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyXMLView Controller");

	QUnit.test("I should test the MyXMLView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
