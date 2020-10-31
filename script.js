$(document).ready(function(){
        $('#submitWeather').click(function(){
            var city=$("#city").val();
            if (city!=''){
                $.ajax({
                    url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial"+"&appid=dcc471e4e01ab72a1fea54a26890f432",
                    type:"GET",
                    dataType:"jsonp",
                    success:function(data){
                        console.log(data);
                        var weatherResult = showResults(data);
                        
                        $("#showWeather").html(weatherResult);
                        $("#city").val();

                    }
                });
            }
            else{
                $("#error").html("<div> City Field can't be empty");
            }

        });

});

function showResults(data){
    return "<p>" Temperature:"data.main.temp" &deg;F</p>";
}