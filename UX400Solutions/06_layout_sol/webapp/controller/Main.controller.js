sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, Device) {
        "use strict";

        return Controller.extend("sap.training.layout.controller.Main", {

            onInit: function () {
               // apply compact density if touch is not supported, the standard cozy design otherwise
               this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
            },

            onButtonPressed () {
                alert("I am pressed!");
            }

        });
    });
