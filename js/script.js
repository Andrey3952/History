$(document).ready(function(){

    var clicThisH2CutId;

    $(".arrowUP").hide();
    $(".pointsClass").hide();

    $("h2").click(function(){


        clicThisH2CutId = $(this).attr("id").substring(0, $(this).attr("id").length - 2);

        if ($("#"+clicThisH2CutId+"PointsId").is(":visible")) {

            $("#"+clicThisH2CutId+"PointsId").hide();
            $("#"+clicThisH2CutId+"DownId").show();
            $("#"+clicThisH2CutId+"UpId").hide();

        } else {

            $(".arrowUP").hide();
            $(".arrowDown").show();
            $(".pointsClass").hide();

            $("#"+clicThisH2CutId+"PointsId").show();
            $("#"+clicThisH2CutId+"DownId").hide();
            $("#"+clicThisH2CutId+"UpId").show();
        }
    });

    $("li").click(function(){
        var thisLiId = $(this).attr("id");
         window.location.href = 'Pages/'+clicThisH2CutId+"/"+thisLiId+".html";
    });
});
// hide - Приховати
// show - Показатти