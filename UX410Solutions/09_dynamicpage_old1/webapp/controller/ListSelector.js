sap.ui.define([
    "sap/ui/base/Object",
    "sap/base/Log"
], function (Object, Log) {
	"use strict";
	return Object.extend("student00.sap.training.dynamicpage.controller.ListSelector", {
		constructor : function () {
			this._oWhenListHasBeenSet = new Promise(function (fnResolveListHasBeenSet) {
				this._fnResolveListHasBeenSet = fnResolveListHasBeenSet;
			}.bind(this));
			this.oWhenListLoadingIsDone = new Promise(function (fnResolve, fnReject) {
				this._oWhenListHasBeenSet
					.then(function (oList) {
						oList.getBinding("items").attachEventOnce("dataReceived",
							function () {
								if (this._oList.getItems().length) {
                                    // Items in the list
                                    fnResolve({
										list : oList
									});
								} else {
									// No items in the list
									fnReject({
										list : oList
									});
								}
							}.bind(this)
						);
					}.bind(this));
			}.bind(this));
		},

		setBoundMasterList : function (oList) {
			this._oList = oList;
			this._fnResolveListHasBeenSet(oList);
		},

		selectAListItem : function (sBindingPath) {
			this.oWhenListLoadingIsDone.then(
				function () {
					var oList = this._oList,oSelectedItem;
					if (oList.getMode() === "None") {
						return;
					}
					oSelectedItem = oList.getSelectedItem();
					if (oSelectedItem && oSelectedItem.getBindingContext().getPath() === sBindingPath) {
						return;
					}
					oList.getItems().some(function (oItem) {
						if (oItem.getBindingContext() && oItem.getBindingContext().getPath() === sBindingPath) {
							oList.setSelectedItem(oItem);
							return true;
						}
					});
				}.bind(this),
				function () {
					Log.warning("Could not select the list item with the path" + sBindingPath + 
						" because the list encountered an error or had no items");
				}
			);},
		
		clearMasterListSelection : function () {
			this._oWhenListHasBeenSet.then(function () {
				this._oList.removeSelections(true);
			}.bind(this));
		}
	});
});