$( "button" ).click(function() {
  var test = $("[select]").val();
  var toTranslate = $("input").val();
  alert(toTranslate);
  if (test ==="German") {
    //call translation function//
  }          //german is selected, pull list a
    else {
      //call translation function for Italian//
    }         //pull list b
});



