sap.ui.define([    

], function() {
     "use strict";
     
     const WEEKDAY  = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday"
     };
     
     return {
        getWeekDay: function (daynumber) {
           return WEEKDAY[daynumber] ?? "unknown";   
        }
    }

});