//Back end logic
const beep = "Beep!"
const boop = "Boop!"
const dave = "I'm sorry, Dave. I'm afraid I can't do that."

var beepBoop = function(inputNum){
  var convArray = [];
  for (var x = 0; x <= inputNum; x++){
    var i = x.toString();
    if (((x % 3) == 0.0) && (x >= 3)) {
        convArray.push(dave);
    }
    else if (i.includes("1")){
      convArray.push(boop);
    }
     else if (i.includes("0")) {
       convArray.push(beep);
     }
     else {
       convArray.push(x);
     }
  };
  var convString = convArray.join(", ");
  return convString;
};


//User interface here
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    $("#outputErr").hide();
    var inputNum = $("input#input").val();
    var outputNum = beepBoop(inputNum);
    if (outputNum != false) {
      $("#output").text(outputNum)
      $("#output").show();
    }
    else {
      $("#outputErr").show();
    }
  });




});
