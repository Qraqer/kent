
var sendPartnerForm = function(form) {
    var data = {
        name : $(form).find('[name=name]').val(),
        company : $(form).find('[name=company]').val(),
        country : $(form).find('[name=country]').val(),
        email : $(form).find('[name=email]').val(),
        message : $(form).find('[name=message]').val()
    };

    $.ajax({
        url: "/ajax/sendPartnerForm.php",
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function (data) {
            $('#modal-partnership').removeClass('js-show');
            $('#modal-partnership-info').show();
            $('#modal-partnership-info').addClass('js-show');
        }
    });

    return false;
}