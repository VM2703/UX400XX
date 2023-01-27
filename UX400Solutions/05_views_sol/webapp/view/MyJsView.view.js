sap.ui.jsview("student00.sap.training.views.view.MyJsView", {

    getControllerName: function () {
        return "student00.sap.training.views.controller.MyJsView";
    },

    createContent: function (oController) {

        var oText = new sap.m.Text({
            text: "Text on JavaScript View"
        });

        var oCheckBox = new sap.m.CheckBox(this.createId("idCheckBox"), {
            text: "No"
        });

        oCheckBox.attachSelect(oController.onCBSelect, oController);

        return [oText, oCheckBox];



    }

});