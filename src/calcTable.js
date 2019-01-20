$(function() {
  $("#error").hide();

  $("#txtRawScore, #txtAdjScore").keyup(function() {
    var rawScoreStr = $("#txtRawScore").val();
    var adjScoreStr = $("#txtAdjScore").val();

    if (rawScoreStr != "" && adjScoreStr != "") {
      console.log("raw score : " + rawScoreStr);
      console.log("adjust score : " + adjScoreStr);
      rawScore = parseInt(rawScoreStr);
      adjScore = parseInt(adjScoreStr);

      if (rawScore < adjScore) {
        $("#error").show();
        $("#tblScore").hide();
      } else {
        $("#tblScore>tbody").empty();

        for (var i = 1; i <= rawScore; i++) {
          var rowNo = i;
          var per = Math.round((((i * 100) / rawScore) * 100)) / 100;
          var adj = Math.round((i * adjScore) / rawScore);
          var row =
            "<tr class='text-center'><td>" + i + "</td><td>" + per + "</td><td>" + adj + "</td>";

          $("#tblScore>tbody").append(row);
        }

        $("#tblScore").show();
        $("#error").hide();
      }
    }
  });
});
