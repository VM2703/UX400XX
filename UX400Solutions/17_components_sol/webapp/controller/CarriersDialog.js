sap.ui.define([
    "sap/ui/base/Object",
    "sap/ui/core/Fragment"
], function (Object, Fragment) {

    "use strict";
    return Object.extend("sap.training.components.controller.CarriersDialog", {

        open: function (oView) {
            // create dialog lazily
            if (!Fragment.byId("idFrag", "carriersDialog")) {
                // load XML fragment asynchronously
                Fragment.load({
                    id: "idFrag",
                    name: "sap.training.components.view.CarriersDialog",
                    type: "XML",
                    controller: this
                }).then(function (oDialog) {
                    // connect dialog to the view (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                Fragment.byId("idFrag", "carriersDialog").open();
            }
        },

        onCloseDialog: function (oEvent) {
            Fragment.byId("idFrag", "carriersDialog").close();
        }

    });
});