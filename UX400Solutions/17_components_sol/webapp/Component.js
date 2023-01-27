sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/training/components/model/models",
    "sap/training/components/controller/CarriersDialog"
],
    function (UIComponent, Device, models, CarriersDialog) {
        "use strict";

        return UIComponent.extend("sap.training.components.Component", {

            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                //set dialog
                this.carriersDialog = new CarriersDialog();
            }
        });
    }
);