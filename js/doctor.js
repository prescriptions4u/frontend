$(document).ready(function()
{
    $.getJSON("js/drugs.json",function(obj)
   {
         $.each(obj.drugs,function(key,value)
         {
        $("#medications").append("<option>" + value.drugName  + "</option>");
         });
    });
});