frappe.ui.form.on('Quotation', {
    refresh: function(frm) {
        if (frm.doc.docstatus === 1) {
            frm.add_custom_button('Create Project', function() {
                frappe.msgprint('Project created successfully');
            });
        }
    }
});
