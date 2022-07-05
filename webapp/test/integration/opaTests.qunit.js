/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/application/sapui5-application/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});