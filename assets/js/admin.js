jQuery(function ($) {
    'use strict'

    var wc_hubtel_admin = {
        /**
         * Initialize.
         */
        init: function () {
            const userType = $('#woocommerce_payments-hubtel_user_type')
            userType.change(function () {
                const posNumber = $('#woocommerce_payments-hubtel_merchant_account_number').parents('tr').eq(0)
                const mobileNumber = $('#woocommerce_payments-hubtel_mobile_number').parents('tr').eq(0)
                if ($(this).val() === 'merchant') {
                    posNumber.show()
                    mobileNumber.hide()
                } else {
                    posNumber.hide()
                    mobileNumber.show()
                }
            })
            userType.change();
        }
    }

    wc_hubtel_admin.init();
})
