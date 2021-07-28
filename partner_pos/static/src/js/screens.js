odoo.define('partner_pos.screen',
    function(require) {
    'use strict';
    var screens = require('points_of_sale.screens')
    var gui = require('point_of_sale.gui')

    var QWeb = core.qweb;
    var _t = core._t;

    //confetti.start()

    var ClientListScreenWidgetExtend = screens.ClientListScreenWidget.extend({
        save_client_details: function(partner) {
            console.log("comienza")
            this.super(partner);
            console.log("finaliza")
        }
    })
    gui.define_screen({name:'clientlist', widget: ClientListScreenWidgetExtend});
    // screens.ClientListScreenWidget.prototype = ClientListScreenWidgetExtend.prototype
    // gui.define_screen({"name":"detalles_cliente", "widget":ClientListScreenWidgetExtend})
});