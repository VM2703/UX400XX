sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sap.training.endnavigation.controller.Main", {
			onInit: function () {
                let oComponentData = this.getOwnerComponent().getComponentData();
                if(oComponentData && oComponentData.startupParameters && oComponentData.startupParameters.helloText) {
                    let sHelloText = decodeURIComponent(oComponentData.startupParameters.helloText[0]),
                        oLabel = this.byId("idInfo");
                        oLabel.setText(sHelloText);
                }
			}
		});
	});
