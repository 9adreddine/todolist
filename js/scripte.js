

var badr = document.getElementById("x");
var bt = document.getElementById("y");
var badr2 = document.getElementById("z");



function xy() {

	if (!badr.value) {

        alert("Add Value");

	}else{
            badr2.innerHTML += "<input class='bad2' type='checkbox'><span class='bad3'>" + badr.value + "</span><br>";
	}
	
  

}

  
