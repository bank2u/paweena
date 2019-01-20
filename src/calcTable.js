$(function() {
    $("#txtRawScore, #txtAdjScore").keyup(function() {
        var rawScore = $("#txtRawScore").val();
        var adjScore = $("#txtAdjScore").val();

        if(rawScore != "" && adjScore != ""){
            console.log("raw score : " + rawScore);
            console.log("adjust score : " + adjScore);
        }
    })
});