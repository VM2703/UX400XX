sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sap.training.propertybinding.controller.Main", {

            onInit: function () {

                var oData = {
                    "name": "Peter",
                    "enabled": true
                };

                var oModel = new JSONModel();
                oModel.setData(oData);
                this.getView().setModel(oModel);
            }

        });
    });
