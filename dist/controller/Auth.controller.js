sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("com.application.sapui5-application.controller.Auth",{onInit:function(){this.oRouter=this.getOwnerComponent().getRouter(this);this.oRouter.attachRoutePatternMatched(this._onRouterMatch,this)},onLoginSuccess:function(){if(this.onLogin()===true){this.oRouter.navTo("DashboardRoute")}else{}},onLogin:function(){var t=false;var e=this.getOwnerComponent().getModel("EnvModel").getData().url;var o=this.getView().byId("idUsername").getValue();var n=this.getView().byId("idPassword").getValue();$.ajax({url:e+"/api/auth/local",type:"POST",async:false,data:{identifier:o,password:n},success:function(e,o,n){t=true},error:function(t){}});return t}})});