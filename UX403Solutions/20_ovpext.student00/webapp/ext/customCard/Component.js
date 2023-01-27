sap.ui.define(["sap/ovp/cards/custom/Component", "jquery.sap.global"],
function (CardComponent, jQuery) {
    "use strict";

    return CardComponent.extend("sap.training.ovpext.student00.ext.customCard.Component", {
    // use inline declaration instead of component.json to save 1 round trip
    metadata: {
        properties: {
        contentFragment: {
            type: "string",
            defaultValue: "sap.training.ovpext.student00.ext.customCard.CustomCardContent",
        },
        headerFragment: {
            type: "string",
            defaultValue: "sap.training.ovpext.student00.ext.customCard.CustomCardHeader",            
        },
        footerFragment: {
            type: "string",
            defaultValue: "",
        },
        },

        version: "${version}",

        library: "sap.ovp",

        includes: [],

        dependencies: {
        libs: ["sap.m"],
        components: [],
        },
        config: {},
        customizing: {
        "sap.ui.controllerExtensions": {
            "sap.ovp.cards.generic.Card": {
            controllerName: "sap.training.ovpext.student00.ext.customCard.CustomCard",
            },
        },
        },
    },
    });
}
);