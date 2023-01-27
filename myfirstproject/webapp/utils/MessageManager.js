sap.ui.define(["sap/m/MessageBox",
               "training/sap/myfirstproject/utils/Formatter"],
               
    function(MessageBox, Formatter) {
        
        return {
            reportSuccess: function(sMsg, sTitle)  {
                MessageBox.show(
                    Formatter.capitalizeFirstLetter(sMsg), {
                    title: Formatter.capitalizeFirstLetter(sTitle)
                });
            }
        };
    });