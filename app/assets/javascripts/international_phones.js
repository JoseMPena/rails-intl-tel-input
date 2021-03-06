//= require intlTelInput/intlTelInput
//= require intlTelInput/utils

$(function () { international_phones_init() });

$(document).on('shown.bs.modal', function () { international_phones_init() });

function international_phones_init () {
    $('[data-intl-tel-input]').each(function () {
        var element = $(this);
        var hidden = element.parent().find('.international_phone_number');
        element.intlTelInput(element.data('intl-tel-input') || {});

        element.closest('form').submit(function () {
            var match = element.intlTelInput('getNumber').match(/(\+\d+)(?=)/g);
            hidden.val(match[match.length - 1]);
        });
    });
}