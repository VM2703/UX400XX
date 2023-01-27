sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sap.training.types.controller.Main", {

            onInit: function () {
                var oModel = new JSONModel();
                this.getView().setModel(oModel);
            }

        });
    });
