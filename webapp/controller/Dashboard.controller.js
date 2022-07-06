sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.application.sapui5-application.controller.Dashboard", {
		onInit: function () {
			this.oRouter = this.getOwnerComponent().getRouter(this);
			this.oRouter.attachRoutePatternMatched(this._onRouterMatch, this);
		},

		onManageProject: function() {
			debugger;
			this.oRouter.navTo("ManageProjectRoute");
		},

		onManageTask: function () {
			debugger;
			this.oRouter.navTo("ManageTaskRoute");
		},

		onManageUser: function () {
			debugger;
		},

		onManageDepartment: function () {
			debugger;
		},

		onManageRoles: function () {
			debugger;
		},

		onManageStatus: function () {
			debugger;
		},

		onManagePriority: function () {
			debugger;	
		},

		onManageOrganization: function () {
			debugger;
		}
	});
});