/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/application/sapui5-application/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});