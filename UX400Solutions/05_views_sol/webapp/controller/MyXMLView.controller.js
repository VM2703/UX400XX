sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("student00.sap.training.views.controller.MyXMLView", {

            onCBSelect: function () {

                var oCheckBox = this.byId("idCheckBox");

                if (oCheckBox.getSelected()) {
                    oCheckBox.setText("Yes");
                } else {
                    oCheckBox.setText("No");
                }
            }
        });
    });
