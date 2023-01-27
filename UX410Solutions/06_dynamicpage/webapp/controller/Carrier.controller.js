sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("student00.sap.training.dynamicpage.controller.Carrier", {
			onInit: function () {
                var oRouter = this.getRouter();
			    oRouter.getRoute("Carrier").attachMatched(this._onObjectMatched, this);
            },
            
            getRouter: function () {
			    return sap.ui.core.UIComponent.getRouterFor(this);
            },
            
            _onObjectMatched: function (oEvent) {
			    var oArgs, oView;
			    oArgs = oEvent.getParameter("arguments");
			    this._sCarrierId = oArgs.carrierId;
			    oView = this.getView();

			    oView.bindElement({
				    path: "/UX_C_Carrier_TP('" + this._sCarrierId + "')",
				    events: {
					    change: this._onBindingChange.bind(this),
					    dataRequested: function () {
						    oView.setBusy(true);
					    },
					    dataReceived: function () {
						    oView.setBusy(false);
					    }
				    }
			    });
            },
            
            _onBindingChange: function () {
			    var oView = this.getView();
			    var oElementBinding = oView.getElementBinding();
			    // No data for the binding
			    if (oElementBinding && !oElementBinding.getBoundContext()) {
				    this.getRouter().getTargets().display("NotFound");
				    return;
			    }
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


