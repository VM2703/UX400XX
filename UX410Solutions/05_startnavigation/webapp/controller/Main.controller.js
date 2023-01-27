sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sap.training.startnavigation.controller.Main", {
			onInit: function () {
                let _fnGetService = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService;               
                this._oCrossAppNavigation = _fnGetService && _fnGetService("CrossApplicationNavigation"),
                this._hash = (this._oCrossAppNavigation && this._oCrossAppNavigation.hrefForExternal({
                    target : {
                        semanticObject : "UX410NavEnd00",
                        action: "display"                        
                    }, 
                    params: {
                        "helloText" : "Hello UX410"
                    }
                })) || "";
                let _oLink = this.byId("idNavLink");
                _oLink.setHref(this._hash);
            },
            
            onPress : function(oEvent) {
                if(this._oCrossAppNavigation) {
                    this._oCrossAppNavigation.toExternal({
                        target: {
                            shellHash : this._hash
                        }
                    })
                }
            }
		});
	});

