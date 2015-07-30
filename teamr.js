$( "button" ).click(function() {
  var test = $("option:selected").val();
  var toTranslate = $("input").val();
  console.log(toTranslate);
  console.log(test);
  var res = toTranslate.split(" ");
  if (test ==="German") {
    var xmas = Gibberish.translateToGerman(res);

    //call translation function//
  }          //german is selected, pull list a
    else {
      var xmas = Gibberish.translateToItalian(res);//call translation function for Italian//
    }
   
  $( "#chat" ).append(xmas);
             //pull list b
});



