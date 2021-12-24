// Copyright (c) 2021, Aerele and contributors
// For license information, please see license.txt

frappe.listview_settings['Sales Invoice'] = {
    filters: [
        ['docstatus', '!=', 2]
    ]
}