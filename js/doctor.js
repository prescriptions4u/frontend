var obj = {
	"drugs": [
		{ "drugName":"Alendronic Acid" },
		{ "drugName":"Amlodipine" },
		{ "drugName":"Atorvastatin" },
		{ "drugName":"Anastrozole" },
		{ "drugName":"Bisoprolol" },
		{ "drugName":"Candesartan" },
		{ "drugName":"Candesartan/Hydrochlorothiazide" },
		{ "drugName":"Citalopram" },
		{ "drugName":"Clopidogrel" },
		{ "drugName":"Donepezil" },
		{ "drugName":"Doxazosin" },
		{ "drugName":"Escitalopram" },
		{ "drugName":"Esomeprazole" },
		{ "drugName":"Fluoxetine" },
		{ "drugName":"Lanzaprazole" },
		{ "drugName":"Lercanidipine" },
		{ "drugName":"Losartan" },
		{ "drugName":"Losartan/Hydrochlorothiazide" },
		{ "drugName":"Memantine" },
		{ "drugName":"Montelukast" },
		{ "drugName":"Omeprazole" },
		{ "drugName":"Olanzapine" },
		{ "drugName":"Pantoprazole" },
		{ "drugName":"Perindopril" },
		{ "drugName":"Pravastatin" },
		{ "drugName":"Quetiapine" },
		{ "drugName":"Rabeprazole" },
		{ "drugName":"Ramipril" },
		{ "drugName":"Risedronic Acid" },
		{ "drugName":"Rosuvastatin" },
		{ "drugName":"Sildenafil" },
		{ "drugName":"Simvastatin" },
		{ "drugName":"Tamsulosin" },
		{ "drugName":"Telmisartan" },
		{ "drugName":"Tolterodine" },
		{ "drugName":"Valsartan" },
		{ "drugName":"Valsartan/Hydrochlorothiazide" },
		{ "drugName":"Venlafaxine" },
		{ "drugName":"Zopiclone" },
		]
	};

for(var i=0;i<obj.drugs.length;i++)
{
    var option=$('<option></option>').text(obj.drugs[i]['drugName']);
  $('select#medications').append(option);

}