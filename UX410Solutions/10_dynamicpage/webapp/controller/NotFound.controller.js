sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("student00.sap.training.dynamicpage.controller.NotFound", {
			getRouter: function () {
			    return sap.ui.core.UIComponent.getRouterFor(this);
		    },

		    onNavBack: function () {
			    var oHistory, sPreviousHash, oRouter;
			    oHistory = sap.ui.core.routing.History.getInstance();
			    sPreviousHash = oHistory.getPreviousHash();

			    if (sPreviousHash !== undefined) {
				    window.history.go(-1);
			    } else {
				    oRouter = this.getRouter();
				    oRouter.navTo("Overview", true /*no history*/ );
			    }
		    }
		});
	});


    