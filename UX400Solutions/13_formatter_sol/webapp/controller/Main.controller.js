sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, JSONModel, Device) {
        "use strict";

        return Controller.extend("sap.training.formatter.controller.Main", {

            onInit: function () {
                var oModel = new JSONModel();
                oModel.loadData("model/data.json");
                this.getView().setModel(oModel);

                // set device model
                var oDeviceModel = new JSONModel(Device);
                oDeviceModel.setDefaultBindingMode("OneWay");
                this.getView().setModel(oDeviceModel, "device");
            },

            carrName: function (sCarrId) {
                switch (sCarrId) {
                    case "LH":
                        return "Lufthansa";
                    case "JL":
                        return "Japan Airlines";
                    case "AZ":
                        return "Alitalia";
                    default:
                        return sCarrId;
                }
            }

        });
    });