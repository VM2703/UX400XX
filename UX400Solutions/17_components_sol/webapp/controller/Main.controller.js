sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sap.training.components.controller.Main", {

            onOpenDialog: function () {
                this.getOwnerComponent().carriersDialog.open(this.getView());
            }

        });
    });
