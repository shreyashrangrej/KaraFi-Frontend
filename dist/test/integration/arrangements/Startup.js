sap.ui.define(["sap/ui/test/Opa5"],function(t){"use strict";return t.extend("com.application.sapui5-application.test.integration.arrangements.Startup",{iStartMyApp:function(t){var a=t||{};a.delay=a.delay||50;this.iStartMyUIComponent({componentConfig:{name:"com.application.sapui5-application",async:true},hash:a.hash,autoWait:a.autoWait})}})});