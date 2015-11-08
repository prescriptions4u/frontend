
$(document).ready(function()
{


	$("#getPatient").click(function()
    {
  		
  		$.get( "./patientData.json", function( data ) {
  			console.log(data);

		});

  		return false;
    });




  		$.get( "./patientData.json", function( data ) {
  			console.log(data);

			var tmpl = $.templates("#patientTemplate");

			var rendered = tmpl.render(data);

			// console.log(rendered);

			$('#getPatientForm').remove();

			$('#patientData').html(rendered);

			// $("#patientTemplate").tmpl(data).appendTo('#patientData');


		});


});

