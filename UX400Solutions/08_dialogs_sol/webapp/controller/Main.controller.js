sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("sap.training.dialogs.controller.Main", {

            onOpenDialog: function () {
                var oView = this.getView();

                // create dialog lazily
                if (!this.byId("idDialog")) {
                    // load XML fragment asynchronously
                    Fragment.load({
                        id: oView.getId(),
                        name: "sap.training.dialogs.view.Dialog",
                        type: "XML",
                        controller: this
                    }).then(function (oDialog) {
                        // connect dialog to the view (models, lifecycle)
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    this.byId("idDialog").open();
                }
            },

            onCloseDialog: function () {
                this.byId("idDialog").close();

                var oInput = this.byId("idInput");
                var oText = this.byId("idText");

                oText.setText("Hello " + oInput.getValue());
            }

        });
    });