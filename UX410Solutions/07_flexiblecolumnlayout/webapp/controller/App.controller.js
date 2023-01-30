sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("student00.sap.training.flexiblecolumnlayout.controller.App", {
			onInit: function () {
                var oViewModel = new JSONModel({
					busy : true,
					delay : 0,
					layout : "OneColumn",
					previousLayout : "",
					actionButtonsInfo : {
						midColumn : {
							fullScreen : false
						}
					}
				});
				this.getOwnerComponent().setModel(oViewModel, "appView");
			}
		});
	});