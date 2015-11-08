



$(document).ready(function()
{


	$("#login button").click(function()
    {
  		
  		if($("#email").val()==="doctor" || $("#email").val()==="pharmacist"){
  			window.location.href = './'+$("#email").val()+'.html'; 
  		}

  		return false;

    });


	$("#getPatient").click(function()
    {
  		
  		$.get( "./patientData.json", function( data ) {
  			console.log(data);

		});

  		return false;
    });


	$.get( "./patientData.json", function( data ) {
  			console.log(data);

	});



});

