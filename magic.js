





$(document).ready(function () {

  $("#submit").on("click", function (){
  alert("I am thinking about your question: " + $("#question").val());
  var ranNum = Math.floor(Math.random() * 4);
  console.log(ranNum);




$("#userQ").append($("#question").val());

    if(ranNum === 0) {$("#answer").append ("<b>I belive it to be true</b>");


    }
    if(ranNum === 1) {$("#answer").append ("<b>My sources say this is false</b>");


    }
    if(ranNum === 2) {$("#answer").append ("<b>Maybe, if you're lucky</b>");


    }
    if(ranNum === 3) {$("#answer").append ("<b>My Magic 8 ball says...YES!</b>");


    }


    $("#submit").off("click");

    $("#question").val("");

      $("#playAgain").on("click", function(){
        var ranNum = Math.floor(Math.random() * 4);

        console.log(ranNum);
      });
  });

});
