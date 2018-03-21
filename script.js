$(document).ready(function() { 
  var channelArr = ["freecodecamp","ESL_SC2","OgamingSC2","cretetion","storbeck","habathcx","RobotCaleb","noobs2ninjas"];
  
    channelArr.forEach(function(elem) {
       $.ajax({
          type:"GET",
          url:"https://wind-bow.glitch.me/twitch-api/streams/"+elem,     
          success:function(data) {
                    if (data.stream !== null) {
                        $("#"+elem).html("<h3>"+elem+"</h3>"+"<p style=\"color:green;\">Online</p>"+"<a href="+"\"https:\/\/www.twitch.tv/"+data.stream.channel.name+"\">"+data.stream.game+": "+data.stream.channel.status+"</a>");
                    } // end if
                    else {
                        $("#"+elem).html("<h3>"+elem+"</h3>"+"<p style=\"color:red;\">Offline</p>");
                    } // end else 
           
                  $.ajax({
                    type:"GET",
                    url:"https://wind-bow.glitch.me/twitch-api/channels/"+elem,
                    success:function(data2) {
                       console.log("<img src='"+data2.logo+"' alt='logo'>");
                       $("#"+elem).prepend("<img src='"+data2.logo+"' alt='logo'>");
                    }
                  }); // end ajax call for logo 
      
       
           }, // end success 
           error:function(){console.log("error");}
        }); // end ajax call for text 
           
       
      }); // end forEach 
 
 
});

