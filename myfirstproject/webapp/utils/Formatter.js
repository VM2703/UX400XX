sap.ui.define([], function() {
    
    return {
       capitalizeFirstLetter: function(sValue) {
           return sValue.charAt(0).toUpperCase() + sValue.slice(1);
        }
    };
});