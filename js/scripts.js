//Back end logic
const beep = "Beep!"
const boop = "Boop!"
const dave = "I'm sorry, Dave. I'm afraid I can't do that."

var beepBoop = function(inputNum){
  var digits = [];
  var convString = [];
  for (var x = 0; x <= inputNum; x++){
    var i = x.toString();
     if (i.includes("0")) {
       convString.push(beep);
       console.log(convString);
     }
  };


};


//User interface here
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    $("#outputErr").hide();
    var inputNum = $("input#input").val();
    var outputNum = beepBoop(inputNum);
  });




});
