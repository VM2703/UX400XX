/***
@controller Name:student00.sap.training.dynamicpage.controller.Carrier,
*@viewId:application-adaptationproject-display-component---carrier
*/
/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
		'sap/ui/core/mvc/ControllerExtension',
		'sap/ui/core/mvc/OverrideExecution',
        'sap/m/MessageBox'
	],
	function (
		ControllerExtension,OverrideExecution, MessageBox
	) {
		"use strict";
		return ControllerExtension.extend("ZUX410_APP00Extension.mycarrierextension", {
			 metadata: {			
			 	methods: {
                     onShowCarrierData : {
                         public:true,
                         final: false,
                         overrideExecution: OverrideExecution.Instead
                     }
                    }
			 },


            override : {
                onShowCarrierData : function(oEvent) {
                    MessageBox.show("You are currently view the data of carrier " + this.getView().getBindingContext().getProperty("Carrname"), {
                        icon: MessageBox.Icon.Information,
                        title: "Carrier data"
                    });
                }
            }
			// // adding a private method, only accessible from this controller extension
			// _privateMethod: function() {},
			// // adding a public method, might be called from or overridden by other controller extensions as well
			// publicMethod: function() {},
			// // adding final public method, might be called from, but not overridden by other controller extensions as well
			// finalPublicMethod: function() {},
			// // adding a hook method, might be called by or overridden from other controller extensions
			// // override these method does not replace the implementation, but executes after the original method
			// onMyHook: function() {},
			// // method public per default, but made private via metadata
			// couldBePrivate: function() {},
			// // this section allows to extend lifecycle hooks or override public methods of the base controller
			// override: {
			// 	/**
			// 	 * Called when a controller is instantiated and its View controls (if available) are already created.
			// 	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			// 	 * @memberOf ZUX410_APP00Extension.mycarrierextension
			// 	 */
			// 	onInit: function() {
			// 	},

			// 	/**
			// 	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			// 	 * (NOT before the first rendering! onInit() is used for that one!).
			// 	 * @memberOf ZUX410_APP00Extension.mycarrierextension
			// 	 */
			// 	onBeforeRendering: function() {
			// 	},

			// 	/**
			// 	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			// 	 * This hook is the same one that SAPUI5 controls get after being rendered.
			// 	 * @memberOf ZUX410_APP00Extension.mycarrierextension
			// 	 */
			// 	onAfterRendering: function() {
			// 	},

			// 	/**
			// 	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			// 	 * @memberOf ZUX410_APP00Extension.mycarrierextension
			// 	 */
			// 	onExit: function() {
			// 	},

			// 	// override public method of the base controller
			// 	basePublicMethod: function() {
			// 	}
			// }
		});
	});