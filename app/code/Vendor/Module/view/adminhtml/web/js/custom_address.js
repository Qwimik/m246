define(['jquery'], ($)=>{
    return function () {
        $(document).ready(()=>{
            // console.log($('.field-street:eq(0)'));
            // console.log($('.field-street:eq(1)'));
            $('.field-street:eq(1)').appendTo('.custom_shipping_address_div');
            $('.field-street:eq(0)').appendTo('.custom_billing_address_div');
            $('.field-city:eq(1)').appendTo('.custom_shipping_address_div');
            $('.field-city:eq(0)').appendTo('.custom_billing_address_div');
            $('.field-country_id:eq(1)').appendTo('.custom_shipping_address_div');
            $('.field-country_id:eq(0)').appendTo('.custom_billing_address_div');
            $('.field-state:eq(1)').appendTo('.custom_shipping_address_div');
            $('.field-state:eq(0)').appendTo('.custom_billing_address_div');
            $('.field-postcode:eq(1)').appendTo('.custom_shipping_address_div');
            $('.field-postcode:eq(0)').appendTo('.custom_billing_address_div');
        })
    }
})
