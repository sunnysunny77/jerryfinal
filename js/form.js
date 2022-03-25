$(document).ready(function() { 
    $('#form-1').submit(function (e) {
        e.preventDefault();
        const sub = $("#submit-1");
        const res = $("#response-1");
        sub.prop( "disabled", true );
        const form = $(this);
        const url = form.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (response) {
                res.html(response);
                setTimeout(function (){
                    res.html("Employment Form");
                    sub.prop( "disabled", false );
                }, 5000);
            }
        });
    });
    $('#form-2').submit(function (e) {
        e.preventDefault();
        const sub = $("#submit-2");
        const res = $("#response-2");
        sub.prop( "disabled", true );
        const form = $(this);
        const url = form.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (response) {
                res.html(response);
                setTimeout(function (){
                    res.html("Purchase Form");
                    sub.prop( "disabled", false );
                }, 5000);
            }
        });
    });
    $('#form-3').submit(function (e) {
        e.preventDefault();
        const sub = $("#submit-3");
        const res = $("#response-3");
        sub.prop( "disabled", true );
        const form = $(this);
        const url = form.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (response) {
                res.html(response);
                setTimeout(function (){
                    res.html("Enquiry Form");
                    sub.prop( "disabled", false );
                }, 5000);
            }
        });
    });
});


