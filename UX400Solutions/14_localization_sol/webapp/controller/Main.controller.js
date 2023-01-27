sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, ResourceModel) {
        "use strict";

        return Controller.extend("sap.training.localization.controller.Main", {

            onInit: function () {
                var i18nModel = new ResourceModel({
                    bundleName: "sap.training.localization.i18n.i18n",
                    async: true
                });
                this.getView().setModel(i18nModel, "i18n");
            },

            onRatingChange: function (oEvent) {
                var nValue = oEvent.getSource().getValue();

                var oView = this.getView();
                oView.getModel("i18n").getResourceBundle().then(function (oResourceBundle) {
                    var sMsg = oResourceBundle.getText("flightRatingMsg", [nValue]);
                    oView.byId("idText").setText(sMsg);
                });
            }

        });
    });