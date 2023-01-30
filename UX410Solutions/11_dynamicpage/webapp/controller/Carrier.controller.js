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
                
			    this.getOwnerComponent().oListSelector.selectAListItem("/UX_C_Carrier_TP('" + this._sCarrierId + "')");
			    var oViewModel = this.getOwnerComponent().getModel("appView");
			    oViewModel.setProperty("/layout","TwoColumnsMidExpanded");
			    this.getOwnerComponent().setModel(oViewModel,"appView");
            },
            
            _onBindingChange: function () {
			    var oView = this.getView();
			    var oElementBinding = oView.getElementBinding();
			    // No data for the binding
			    if (oElementBinding && !oElementBinding.getBoundContext()) {
				    this.getOwnerComponent().oListSelector.clearMasterListSelection();
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
            },
            
            onCloseDetailPress: function () {
				this.getOwnerComponent().getModel("appView").setProperty(
								"/actionButtonsInfo/midColumn/fullScreen", false);
				this.getOwnerComponent().oListSelector.clearMasterListSelection();
				this.getRouter().navTo("Overview");
		    },
		
		    onToggleFullScreen: function () {
				var bFullScreen = this.getOwnerComponent().getModel("appView").getProperty(
						"/actionButtonsInfo/midColumn/fullScreen");
				this.getOwnerComponent().getModel("appView").setProperty(
						"/actionButtonsInfo/midColumn/fullScreen", !bFullScreen);
				if (!bFullScreen) {
					// store the current layout and go full screen
					this.getOwnerComponent().getModel("appView").setProperty("/previousLayout", 
									this.getOwnerComponent().getModel("appView").getProperty("/layout"));
					this.getOwnerComponent().getModel("appView").setProperty("/layout", "MidColumnFullScreen");
				} else {
					// reset to the previous layout
					this.getOwnerComponent().getModel("appView").setProperty("/layout",  	
									this.getOwnerComponent().getModel("appView").getProperty("/previousLayout"));
				}
			}
		});
	});