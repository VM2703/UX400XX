sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.training.fragments.controller.Main", {

            onXmlButtonPress: function () {
                var oInput = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInput"));
                var oText = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idText"));

                oText.setText("Hello " + oInput.getValue());
            },

            onJsButtonPress: function () {
                var oInput = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idInput"));
                var oText = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idText"));

                oText.setText("Hello " + oInput.getValue());
            }

        });
    });
