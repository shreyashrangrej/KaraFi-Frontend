sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/application/sapui5-application/model/models"],function(i,e,t){"use strict";return i.extend("com.application.sapui5-application.Component",{metadata:{manifest:"json"},init:function(){i.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});