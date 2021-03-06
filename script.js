$(document).ready(function(){
        $('#submitCity').click(function(){
            return getWeather();
        });
        
   
        
       
    function getWeather(){
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
                $("#error").html("<div class='alert alert-danger' id='errorCity'> City Field can't be empty</div>");
            }

        }


        var currentDate=moment().format("MMMM Do, YYYY");
        console.log(currentDate);   

function showResults(data){
    return  '<h3> Current weather for '+data.name+' </h3>'+
            "<p> Date:"+currentDate+" </p>"+
            "<p> Weather:"+data.weather[0].main+" </p>"+
            "<p> Temperature:"+data.main.temp+" &deg;F</p>"+
            "<p> Min temperature:"+data.main.temp_min+" </p>"+
            "<p> Max temperature:"+data.main.temp_max+" </p>"+
            "<p> Humidity:"+data.main.humidity+" </p>"+
            "<p>Wind speed:"+data.wind.speed+ " m/s</p>";
}
});

for(var i=0; i<localStorage.length;i++)
        {
            var city=localStorage.getItem(i);
            var cityName=$(".list-group").addClass("list-group-item");
            cityName.append("<li>+city+</li>");    
        }