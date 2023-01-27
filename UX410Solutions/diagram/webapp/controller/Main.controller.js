sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/viz/ui5/controls/common/feeds/FeedItem",
    "sap/viz/ui5/data/DimensionDefinition",
    "sap/viz/ui5/data/MeasureDefinition",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/m/Column",
    "sap/m/Label",
    "sap/ui/core/Item",
    "sap/m/ColumnListItem"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, FeedItem, DimensionDefinition, MeasureDefinition, FlattenedDataset, Column, Label, Item, ColumnListItem) {
        "use strict";

        return Controller.extend("sap.training.diagram.controller.Main", {
            onInit: function () {
                this.sCurrentVizFrame = "idLineChartVizFrame";
                this.sCurrentSelectedDimension = "0";
                this._createFeedMap();
                this._createDataSetMap();
                this._dataSet = this._createDataSet();
                this._createLineDiagram();
                this._createColumnChart();
                this._createTable();
                this._createSelector();
            },
   
            _createFeedMap: function () {
                this.feedMap = {};
                this.feedMap.salesAmount = new FeedItem({
                    "uid": "valueAxis",
                    "type": "Measure",
                    "values": ["SalesAmount"]
                });
            
                this.feedMap.products = new FeedItem({
                    "uid": "categoryAxis",
                    "type": "Dimension",
                    "values": ["Products"]
                });
            
                this.feedMap.subregion = new FeedItem({
                    "uid": "categoryAxis",
                    "type": "Dimension",
                    "values": ["Sub_Region_Name"]
                });
            
                this.feedMap.productSubregion = new FeedItem({
                    "uid": "categoryAxis",
                    "type": "Dimension",
                    "values": ["Products","Sub_Region_Name"]
                });
            },

            _createDataSetMap: function () {
                this.dataSetMap = {};
                this.dataSetMap.productDim = new DimensionDefinition({
                    name: "Products",
                    value: "{SalesModel>PRODUCT_NAME}"
                });
                this.dataSetMap.subregionDim = new DimensionDefinition({
                    name: "Sub_Region_Name",
                    value: "{SalesModel>SUB_REGION_NAME}"
                });
                this.dataSetMap.salesAmountMeasure = new MeasureDefinition({
                    name: "SalesAmount",
                    value: "{SalesModel>SALES_AMOUNT}"
                });
            },

            _createDataSet: function () {
                var oDataset = new FlattenedDataset({
                    data: {
                        path: "SalesModel>/"
                    }
                });
                return oDataset;
            },

            _handleSelection: function (selectedItem) {
                var oVizFrame = this.getView().byId(this.sCurrentVizFrame);
                var oDataSet = oVizFrame.getDataset();
                oDataSet.removeAllDimensions();
                oDataSet.removeAllMeasures();
                oVizFrame.removeAllFeeds();
                switch(selectedItem) {
                    case "0":
                    {
                        oDataSet.addDimension(this.dataSetMap.productDim);
                        oDataSet.addMeasure(this.dataSetMap.salesAmountMeasure);
                        oVizFrame.addFeed(this.feedMap.products);
                        oVizFrame.addFeed(this.feedMap.salesAmount);
                        break;
                    }
                    case "1":
                    {
                        oDataSet.addDimension(this.dataSetMap.subregionDim);
                        oDataSet.addMeasure(this.dataSetMap.salesAmountMeasure);
                        oVizFrame.addFeed(this.feedMap.subregion);
                        oVizFrame.addFeed(this.feedMap.salesAmount);
                        break;
                    }
                    case "2":
                    {
                        oVizFrame.getDataset().addDimension(this.dataSetMap.productDim);
                        oVizFrame.getDataset().addDimension(this.dataSetMap.subregionDim);
                        oVizFrame.getDataset().addMeasure(this.dataSetMap.salesAmountMeasure);
                        oVizFrame.addFeed(this.feedMap.productsSubregion);
                        oVizFrame.addFeed(this.feedMap.salesAmount);
                        break;
                    }
                }
            },

            _createLineDiagram: function() {
                var oVizFrame = this.getView().byId("idLineChartVizFrame");
                var oPop = this.getView().byId("idLineChartPopover");
                oVizFrame.setDataset(this._createDataSet());
                this._handleSelection(this.sCurrentSelectedDimension);
                oVizFrame.setVizProperties({
                    plotArea: {
                        dataLabel: {
                            visible: true
                        }
                    },
                    title: {
                        visible: false
                    }
                });
                oVizFrame.setVizType('line');
                oPop.connect(oVizFrame.getVizUid());
            },

            _createColumnChart: function () {
                var oVizFrame = this.getView().byId("idBarChartVizFrame");
                oVizFrame.setDataset(this._createDataSet());
                oVizFrame.setVizProperties({
                    plotArea: {
                        dataLabel: {
                            visible: true
                        }
                    },
                    title: {
                        visible: false
                    }
                });
                oVizFrame.setVizType('column');
            },

            onContentChange: function (oEvent) {
                var sSelectedVizFrame = oEvent.getParameter("selectedItemId");
                if (sSelectedVizFrame.indexOf("Table") === -1) {
                    this.sCurrentVizFrame = sSelectedVizFrame.split("--")[2];
                    this._handleSelection(this.sCurrentSelectedDimension);
                }
            },

            _createTable: function() {
                var oTable = this.getView().byId("idTable");
                oTable.addColumn(new Column({header: new Label({text: "Region", textAlign: "Right"})}));
                oTable.addColumn(new Column({header: new Label({text: "Sub Region", textAlign: "Left"})}));
                oTable.addColumn(new Column({header: new Label({text: "Product name"})}));
                oTable.addColumn(new Column({header: new Label({text: "Sales Amount"})}));

                var oTableTemplate = new ColumnListItem({
                    type: sap.m.ListType.Active,
                    cells: [new Label({
                        text: "{SalesModel>REGION_NAME}"
                    }), new Label({
                        text: "{SalesModel>SUB_REGION_NAME}",
                        textAlign: "Left"
                    }),new Label({
                        text: "{SalesModel>PRODUCT_NAME}",
                        textAlign: "Right"
                    }),new Label({
                        text: "{SalesModel>SALES_AMOUNT}",
                        textAlign: "Center"
                    })]
                });
                oTable.bindItems("SalesModel>/",oTableTemplate,null,null);
            },

            _createSelector: function() {
                var oViewSelector = this.byId("idDimSelector");
                var oItemProduct = new Item({
                    key: "0",
                    text: "{i18n>perProduct}"
                });
                var oItemRegion = new Item({
                    key: "1",
                    text: "{i18n>perRegion}"
                });
                var oItemProductRegion = new Item({
                    key: "0",
                    text: "{i18n>perProdReg}"
                });

                oViewSelector.addItem(oItemProduct);
                oViewSelector.addItem(oItemRegion);
                oViewSelector.addItem(oItemProductRegion);
            },
            
            onChange: function (oEvent) {
                this.sCurrentSelectedDimension = oEvent.getParameter("selectedItem").getKey();
                this._handleSelection(this.sCurrentSelectedDimension)
            }
        });
    }
);