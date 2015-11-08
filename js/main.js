



$(document).ready(function()
{


	$("#login button").click(function()
    {
  		
  		if($("#email").val()==="doctor" || $("#email").val()==="pharmacist"){
  			window.location.href = './'+$("#email").val()+'.html'; 
  		}

  		return false;

    });



});

