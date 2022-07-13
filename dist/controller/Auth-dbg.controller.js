sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.application.sapui5-application.controller.Auth", {
		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter(this);
			this.oRouter.attachRoutePatternMatched(this._onRouterMatch, this);
		},

		onLoginSuccess: function () {
			if (this.onLogin() === true) {
				this.oRouter.navTo("DashboardRoute");

			} else {


			}
		},

		onLogin: function () {
			var flag = false
			var URL = this.getOwnerComponent().getModel("EnvModel").getData().url;
			var oUsername = this.getView().byId("idUsername").getValue();
			var oPassword = this.getView().byId("idPassword").getValue();
			$.ajax({
				url: URL + "/api/auth/local",
				type: "POST",
				async: false,
				data: {
					"identifier": oUsername,
					"password": oPassword
				},
				success: function (req, res, xhs) {
					flag = true;
				},
				error: function (err) {
				}
			});
			return flag;
		}
	});
});