function display()
{
	document.getElementById("date").innerHTML= Date();
}
function check()
{
	var statement = parseInt(prompt("How old are you?"));
	if(isNaN(statement) )
	{
		alert("I didnt think so");
	}
	else
	{
		if(statement < 13)
		{
			alert("Come back in" + (statement - 13) + "years");
		}
		else
		{
			alert("come on in");
		}
	}
}
document.addEventListener("DOMContentLoaded", function() {
	check();
  });