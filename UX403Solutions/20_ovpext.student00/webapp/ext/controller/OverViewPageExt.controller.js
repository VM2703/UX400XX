sap.ui.define([
    "sap/ui/model/Filter"
], function (Filter) {
    "use strict";
    // controller for custom filter, navigation param, action(quick view and global filter), navigation target 
    // controller class name can be like app.ovp.ext.CustomFilter where app.ovp can be replaced with your application namespace
    return {
        getCustomFilters: function () {
            /* This method returns a filter object to the OVP library. If there are multiple filters, they should 
            be clubbed into single Filter object. */		

            var sSelectedKey = this.oView.byId("CustomProductCategory").getSelectedKey();
            var aFilters = [], oFilter1, oFilter2;

            switch (sSelectedKey){
				case "All":
					break;
				case "Category1":
                    oFilter1 = new Filter({path: "Product", operator: "EQ", value1: "HT-1000"});
                    aFilters.push(oFilter1);
                    //oFilter2 = new Filter({path: "Product", operator: "EQ", value1: "HT-1001"});
                    //aFilters.push(oFilter2);
				    break;
				case "Category2":
					oFilter1 = new Filter({path: "Product", operator: "EQ", value1: "HT-1002"});
                    aFilters.push(oFilter1);  
                    //oFilter2 = new Filter({path: "Product", operator: "EQ", value1: "HT-1003"});
                    //aFilters.push(oFilter2);
					break;
				default:
					break;
			}

            if (aFilters && aFilters.length > 0) {
                return (new Filter(aFilters, true));
            }
        },
        getCustomAppStateDataExtension: function (oCustomData) {
            //the content of the custom field will be stored in the app state, so that it can be restored later, for example after a back navigation.
            //The developer has to ensure that the content of the field is stored in the object that is returned by this method.
            if (oCustomData) {
                var oCustomField1 = this.oView.byId("CustomProductCategory");
                if (oCustomField1) {
                    oCustomData.Product = oCustomField1.getSelectedKey();
                }
            }
        },
        restoreCustomAppStateDataExtension: function (oCustomData) {
            //in order to restore the content of the custom field in the filter bar, for example after a back navigation,
            //an object with the content is handed over to this method. Now the developer has to ensure that the content of the custom filter is set to the control
            if (oCustomData) {
                if (oCustomData.Product) {
                    var oCustomField1 = this.oView.byId("CustomProductCategory");
                    oCustomField1.setValue(oCustomData.Product);
                }
            }
        }
    }
});