
$(document).ready(function()
{


	$("#getPatient").click(function()
    {
  		
  		$.get( "./patientData.json", function( data ) {
  			console.log(data);

		});

  		return false;
    });


		// This should be inside the #getPatient click function!
  		$.get( "./patientData.json", function( data ) {
  			
			var tmpl = $.templates("#patientTemplate");

			var rendered = tmpl.render(data);

			$('#getPatientForm').remove();

			$('#patientData').html(rendered);

		});





});

