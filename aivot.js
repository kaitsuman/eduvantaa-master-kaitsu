function laatikkoFunktio(boxNumber){
    alert("Nyt vaihdetaan laatikko"+ boxNumber + ":n sisältöä!");

    if (boxNumber == 1){
        document.getElementById("laatikko1").innerHTML = 
        "<h1 class='uusiOtsikko1'>Tähän tulee uusi otsikko!</h1>" + 
        "<p>Ja tähän tietysti jotain sisältöä...</p>";
        document.getElementById("laatikko1").style.lineHeight = "50px";
    }
    else if (boxNumber == 2){
        document.getElementById("laatikko2").innerHTML =
        "<table style='width:100%'>" +
            "<tr>" +
                "<th>21</th>" +
                "<th>Lafase</th>" +
                "<th>42fgds</th>" +
            "</tr>" +
            "<tr>" +
                "<td>dosl</td>" +
                "<td>Smdsafh</td>" +
                "<td>5fa0</td>" +
            "</tr>" +
            "<tr>" +
                "<td>Evdsagfe</td>" +
                "<td>Jaasdcgdksohfn</td>" +
                "<td>9dsag4</td>" +
            "</tr>" +
        "</table>";
    }
    else{ (boxNumber == 3)
        document.getElementById("laatikko3").innerHTML =
        "<img src='https://www.sciencemag.org/sites/default/files/styles/inline__699w__no_aspect/public/bird_16x9_3.jpg?itok=7xz-mZ1c'" +
        "alt='Birb'>";
    }
    
}
function yhteystietoFunktio() {
    var x = document.getElementById("yhteystietolomake");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("yhteystiedotTuloste").innerHTML = text;
  }
