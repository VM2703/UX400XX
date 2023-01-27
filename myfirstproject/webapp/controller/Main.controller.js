sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageBox",
     "training/sap/myfirstproject/utils/WeekdayUtil",
     "sap/ui/model/json/JSONModel"
],
     
   /**
    *
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    */
function (Controller, MessageBox, WeekdayUtil, JSONModel) {
     "use strict";
     
     return Controller.extend("training.sap.myfirstproject.controller.Main", {
         onInit: function () {
             this.patience = 3; 
             
             const localJsonModel = new JSONModel();
             localJsonModel.setData({ name: "Dave", enabled: true });
             this.getView().setModel(localJsonModel); 
        
            },
        
        onCheckMondayButtonPressed: function () {
            
            //Unit 5 - Exercise 4
            
            sap.ui.require([
                "training/sap/myfirstproject/utils/WeekdayUtil"
            ], function (WeekdayUtil) {
                 const dayNumber = new Date().getDay();
                 const dayString = WeekdayUtil.getWeekDay(dayNumber);
                 
                 MessageBox.information(dayString === "Monday" ? "Yes" : "No");
            });
        },
        
        onCheckMondayButtonPressedPatience: function () {
            
            this._losePatience(); 
            const dayNumber = new Date().getDay();
            const dayString = WeekdayUtil.getWeekDay(dayNumber);
            
            //MessageBox.information(dayString);
            
            let sMessage = dayString === "Monday" ? "Yes" : "No";
            
            if (this.patience <= 0) {
                sMessage = sMessage + ", stop asking!";
            
            } 
            
            MessageBox.information(sMessage);
        
        },
        
        onButtonPressed: function () {
            
            //MessageBox.information("No");
            
            sap.ui.require([                
                "training/sap/myfirstproject/utils/MessageManager"
            ], function (MessageManager) {
                  MessageManager.reportSuccess("button was pressed", "success");
            });
        },
        
        onWeekdayPressed: function () {
            
            sap.ui.require([
                "training/sap/myfirstproject/utils/WeekdayUtil"
            ], function (WeekdayUtil) {
                  const dayNumber = new Date().getDay();
                  const dayString = WeekdayUtil.getWeekDay(dayNumber);
                   MessageBox.information(dayString);
            });
        },
        
        _losePatience: function () {
            this.patience--;
        }
    });
});