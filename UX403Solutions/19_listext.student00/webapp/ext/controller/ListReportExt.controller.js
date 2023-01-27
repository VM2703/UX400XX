sap.ui.define([],
//Alternativ sap.ui.controller("listext.student00.ext.controller.ListReportExt", { onCalcu.. : function(ovent) {
function (){
    "use strict";
    return {
        onCalculateDifference: function(oEvent) {
            //alert('onCalculateDifference');
        
            var oModel = this.getOwnerComponent().getModel();
            var aSelectedContexts = this.extensionAPI.getSelectedContexts();
            var sBindingPath = aSelectedContexts[0].getPath();

            var fnFunction = function(){
                return new Promise(function(fnResolve, fnReject){
                    oModel.read(sBindingPath, {
                        success: function(oData){
                            var fDifference = (oData.GrossAmount - oData.NetAmount).toFixed(2);
                            var oMessage = new sap.ui.core.message.Message({
                                message: "The difference between the Gross Amount and Net Amount is "
                                 + fDifference + " EUR",
                                persistent: true,
                                type: sap.ui.core.MessageType.Success
                            });
                            var oMessageManager = sap.ui.getCore().getMessageManager();
                            oMessageManager.addMessages(oMessage);
                            fnResolve();
                        },
                        error: function(){
                            fnReject();
                        }
                    });  
                })
            };
    
            this.extensionAPI.securedExecution(fnFunction);

        }
    };
});
