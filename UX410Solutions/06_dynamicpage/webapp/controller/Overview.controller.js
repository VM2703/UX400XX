sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("student00.sap.training.dynamicpage.controller.Overview", {
			getRouter: function () {
			    return sap.ui.core.UIComponent.getRouterFor(this);
		    },

		    onPress: function (oEvent) {
			    var oItem, oCtx, sCarrid, oRouter;
			    oItem = oEvent.getSource();
			    oCtx = oItem.getBindingContext();
			    sCarrid = oCtx.getProperty("Carrid");
			
			    oRouter = this.getRouter();
			    oRouter.navTo("Carrier", {
				    carrierId: sCarrid
			    }, false /*with history*/ );
		    }
		});
	});

    