sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageBox"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller, ODataModel, MessageBox) {
        "use strict";

        return Controller.extend("sap.training.odata.controller.Main", {

            onInit: function () {
                var sUrl = "/sap/opu/odata/sap/ZUX_TRAVEL_SRV/";
                var oModel = new ODataModel(sUrl, {
                    useBatch: false
                });

                this.getView().setModel(oModel);
            },

            onFlightChange: function (oEvent) {
                // get the binding context of the selected row
                var selectedRowContext = oEvent.getParameter("rowContext");
                var sPath = selectedRowContext.getPath();

                var oBookingTable = this.byId("idBookingTable");
                oBookingTable.bindElement(sPath);
            },

            onCancelBooking: function (oEvent) {
                var carrId = oEvent.getSource().data("Carrid");
                var bookId = oEvent.getSource().data("Bookid");

                var oModel = this.getView().getModel();

                var oFlightTable = this.byId("idFlightTable");

                oModel.callFunction("/CancelBooking", {
                    method: "POST",
                    urlParameters: {
                        Carrid: carrId,
                        Bookid: bookId
                    },
                    success: function (oData, response ) {
                        
                        oFlightTable.getModel().refresh(true);
                        //alert("success");
                        
                    },
                    error: function (oError) {
                        var oMsg = JSON.parse(oError.responseText);
                        MessageBox.error(oMsg.error.innererror.errordetails[0].message, {
                            details: oMsg
                        });
                    }
                });
            },

            onCreateBooking: function (oEvent) {
                var carrId = oEvent.getSource().data("Carrid");
                var connId = oEvent.getSource().data("Connid");
                var fldate = oEvent.getSource().data("Fldate");

                var oBookingData = {
                    "Carrid": carrId,
                    "Connid": connId,
                    "Fldate": fldate,
                    "Customid": "154",
                    "Passname": "Anita Acht",
                    "Counter": "1"
                };

                var oFlightTable = this.byId("idFlightTable");
                var oBookingTable = this.byId("idBookingTable");
                var oModel = this.getView().getModel();

                oModel.create("/UX_C_Booking_TP", oBookingData, {
                    success: function (OData) {
                        
                        oFlightTable.getModel().refresh(true);
                        
                        MessageBox.success("Booking created with booking number " + OData.Bookid);

                        var oSorter = new sap.ui.model.Sorter("OrderDate", true);
                        oBookingTable.getBinding("rows").sort([oSorter]);
                    },
                    error: function (oError) {
                        var oMsg = JSON.parse(oError.responseText);
                        MessageBox.error(oMsg.error.innererror.errordetails[0].message, {
                            details: oMsg
                        });
                    }
                });
            }

        });
    });