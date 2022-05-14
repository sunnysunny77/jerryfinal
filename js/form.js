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
                const text = res.text();
                res.html(response);
                setTimeout(function (){
                    res.html(text);
                    sub.prop( "disabled", false );
                    form.trigger("reset");
                }, 9000);
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
                const text = res.text();
                res.html(response);
                setTimeout(function (){
                    res.html(text);
                    sub.prop( "disabled", false );
                    form.trigger("reset");
                }, 9000);
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
                const text = res.text();
                res.html(response);
                setTimeout(function (){
                    res.html(text);
                    sub.prop( "disabled", false );
                    form.trigger("reset");
                }, 9000);
            }
        });
    });
});


