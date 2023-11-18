function myFunction() {
  var txt;
  if (
    confirm(
      "Thank you again for reading my About me and Contact information!!"
    )
  ) {
    txt =
      "Really hoped you enjoyed it and also side note, Email is my most preferred contact method!!!";
  } else {
    txt = "Ok thanks maybe next time!!!";
  }
  document.getElementById("demo").innerHTML = txt;
}