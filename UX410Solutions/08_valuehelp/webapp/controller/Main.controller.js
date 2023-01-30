sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/ui/core/Fragment"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, Filter, FilterOperator, Fragment) {
		"use strict";

		return Controller.extend("student00.sap.training.valuehelp.controller.Main", {
            _oFormFragments: {},

            onInit: function () {
                this.oDynamicPage = this.byId("idHeaderLayout");
			    this.oDynamicPage.setVisible(false);
            },
            
            onValueHelpRequest: function (oEvent) {
			    var sInputValue = oEvent.getSource().getValue();
			    this._sInputId = oEvent.getSource().getId();
                if (!this._oValueHelpDialog) {				   
                        Fragment.load({                  
                                name: "student00.sap.training.valuehelp.view.CarrierSelectionDialog",
                                controller: this
                    }).then(function(oFragment) {
                        this._oValueHelpDialog = oFragment;                    
                        this.getView().addDependent(this._oValueHelpDialog);
                        this._oValueHelpDialog.getBinding("items").filter([new Filter(
				                "Carrid", FilterOperator.Contains, sInputValue
                        )]);
                        this._oValueHelpDialog.open(sInputValue);
                    }.bind(this));				   
			    } else {
                    this._oValueHelpDialog.getBinding("items").filter([new Filter(
				            "Carrid", FilterOperator.Contains, sInputValue
                    )]);
                    this._oValueHelpDialog.open(sInputValue);
                }		    			    
            },
            
            onValueHelpSearch: function (oEvent) {
			    var sValue = oEvent.getParameter("value");
			    var oFilter = new Filter(
				    "Carrid", FilterOperator.Contains, sValue
			    );
			    var oFilter2 = new Filter(
				    "Carrname", FilterOperator.StartsWith, sValue
			    );
			    var oFilter3 = new Filter({
				    filters: [oFilter, oFilter2],
				    and: false
			    });
			    oEvent.getSource().getBinding("items").filter([oFilter3]);
            },
            
            onValueHelpClose: function (oEvent) {
			    var oSelectedItem = oEvent.getParameter("selectedItem");
			    if (oSelectedItem) {
				    var oCarridInput = this.getView().byId(this._sInputId);
                    oCarridInput.setValue(oSelectedItem.getTitle());                    
                
                    oEvent.getSource().getBinding("items").filter([]);
                    this.oDynamicPage.setVisible(true);                   
                    var sPath = oSelectedItem.getBindingContext().getPath();
                    this._createFlightsTable(sPath);                   
                    this.byId("idHeaderLayout").bindElement(sPath);
                }
            },
            
            _createFlightsTable : function(sPath) {
			    var oFragment = this._oFormFragments["Flights"];
			    if (oFragment) {
                    oFragment.bindElement(sPath);
				    return oFragment;
                }                
                Fragment.load({
                    id: this.getView().getId(), 
                    name: "student00.sap.training.valuehelp.view.Flights",
                    controller: this
                }).then(function(oFragment) {
                    var oDynPage = this.byId("idDynPage");
			        oDynPage.destroyContent();
			        oDynPage.setContent(oFragment);
                    this._oFormFragments["Flights"] = oFragment;
                    oFragment.bindElement(sPath);
                }.bind(this));
		    }
		});
	});