function showhidescr(divid)
{
    if(divid == 'standard')
    {
        $("#metricscr").hide();
        $("#standardscr").show();
        $("#stdanc").addClass("active");
        $("#metanc").removeClass("active");
    }
    else
    {
        $("#metricscr").show();
        $("#standardscr").hide();
        $("#stdanc").removeClass("active");
        $("#metanc").addClass("active");
    }
}
function calculatebmi(divid)
{
    if(divid == 'standard')
    {
        var totalheightinch = ($("#heightft").val()*12)+parseInt($("#heightinch").val());
        var totalweight = $("#weightlbs").val();
        var bmi = (totalweight/(totalheightinch*totalheightinch)*703).toFixed(2);

        if(bmi <= 18.5)
        {
            var mymass = 'Underweight =< 18.5';
            var progid = 'underweight';
        }
        else if(bmi > 18.5 && bmi <=24.9)
        {
            var mymass = "Normal weight = 18.5-24.9";
            var progid = "normalweight";
        }
        else if(bmi >= 25 && bmi <=29.9)
        {
            var mymass = "Overweight = 25-29.9";
            var progid = "overweight";
        }
        else
        {
            var mymass = "Obesity = BMI of 30 or greater";
            var progid = "obesity";
        }
        if(progid == 'obesity')
        {
            var bmihtml = '<p class="text" style="color: #ffffff;">'+mymass+'</p><div id="'+progid+'">&nbsp;</div>';
        }
        else
        {
            var bmihtml = '<p class="text">'+mymass+'</p><div id="'+progid+'">&nbsp;</div>';
        }

        $("#bmistnd").val(bmi);
        $("#standardprog").html(bmihtml);
    }
    else
    {
        var totalheightmet = $("#heightcm").val()/100;
        var totalweight = $("#weightkg").val();
        var bmi = (totalweight/(totalheightmet*totalheightmet)).toFixed(2);

        if(bmi <= 18.5)
        {
            var mymass = 'Underweight =< 18.5';
            var progid = 'underweight';
        }
        else if(bmi > 18.5 && bmi <=24.9)
        {
            var mymass = "Normal weight = 18.5-24.9";
            var progid = "normalweight";
        }
        else if(bmi >= 25 && bmi <=29.9)
        {
            var mymass = "Overweight = 25-29.9";
            var progid = "overweight";
        }
        else
        {
            var mymass = "Obesity = BMI of 30 or greater";
            var progid = "obesity";
        }
        if(progid == 'obesity')
        {
            var bmihtml = '<p class="text" style="color: #ffffff;">'+mymass+'</p><div id="'+progid+'">&nbsp;</div>';
        }
        else
        {
            var bmihtml = '<p class="text">'+mymass+'</p><div id="'+progid+'">&nbsp;</div>';
        }

        $("#bmimet").val(bmi);
        $("#metricprog").html(bmihtml);
    }
}

$(document).ready(function(){
    $("#stdanc").click(function(){
        showhidescr('standard');
    })

    $("#metanc").click(function(){
        showhidescr('metric');
    })

    $("#btncalc").click(function(){
        calculatebmi('standard');
    })

    $("#btncalc1").click(function(){
        calculatebmi('metric');
    })
})