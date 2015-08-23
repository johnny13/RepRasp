/*
* PRINT FUNCTIONS
*
* this file contains all the API Interactions.
*/ 

function movedirection(xamt,yamt,zamt){
  
  if(document.location.port == 80 || document.location.port == "80" || document.location.port == "" || document.location.port == undefined){
    PGlobalURL = someFunction(document.location.protocol +"//"+ document.location.hostname);
  } else {
    var portside = document.location.protocol +"//"+ document.location.hostname + ":"+document.location.port;
    console.debug(document.location.port);
    PGlobalURL =  someFunction(portside);
  }
   
  var xocto_url = PGlobalURL+"/api/printer/printhead";
  var dirdata = {"command": "jog", "x":xamt, "y":yamt, "z":zamt};
  var xjd = JSON.stringify(dirdata);
  
  $.ajax({
      type: "post",
      url: xocto_url,
      dataType:"json",
      data: xjd,
      contentType: "application/json",
      headers: { 'X-Api-Key': GlobalKey },
      success: function(data){
        console.debug(data);
      },
      error: function(data){
        console.debug(data);
        MumfordNote("API ERROR. Command Incomplete",false,"error");
      }
  });
}

function homeaxis(hdata){
  
  if(document.location.port == 80 || document.location.port == "80" || document.location.port == "" || document.location.port == undefined){
    PGlobalURL = someFunction(document.location.protocol +"//"+ document.location.hostname);
  } else {
    var portside = document.location.protocol +"//"+ document.location.hostname + ":"+document.location.port;
    console.debug(document.location.port);
    PGlobalURL =  someFunction(portside);
  }
  
  var hocto_url = PGlobalURL+"/api/printer/printhead";
  var hjd = JSON.stringify(hdata);

  $.ajax({
      type: "post",
      url: hocto_url,
      dataType:"json",
      data: hjd,
      contentType: "application/json",
      headers: { 'X-Api-Key': GlobalKey },
      success: function(data){
        //console.debug(data);
        //if empty all good
      },
      error: function(data){
        console.debug(data);
        MumfordNote("API ERROR. Command Incomplete",false,"error");
      }
  });
}

function getstatus(){
  
    if(document.location.port == 80 || document.location.port == "80" || document.location.port == "" || document.location.port == undefined){
      PGlobalURL = someFunction(document.location.protocol +"//"+ document.location.hostname);
    } else {
      var portside = document.location.protocol +"//"+ document.location.hostname + ":"+document.location.port;
      console.debug(document.location.port);
      PGlobalURL =  someFunction(portside);
    }
    
    var octo_url = PGlobalURL+"/api/connection";
    console.debug(octo_url);
  
    $.ajax({
        type: "GET",
        url: octo_url,
        dataType:"JSON",
        headers: { 'X-Api-Key': GlobalKey },
        success: function(data){
          console.debug(data);
          
          if(data.current !== undefined && data.current.state !== undefined){
            $("#mac_state").text(data.current.state);
            if(data.current.state == "Operational"){
              $(".status_panel").removeClass("panel-default").addClass("panel-success");
              $(".status_lead ").addClass("alert-success");
            }
          }
          
        },
        error: function(data){
          console.debug(data);
          $(".status_panel").removeClass("panel-default").addClass("panel-danger");
            $(".status_lead ").addClass("alert-danger");
            $("#mac_state").text("unreachable");
            $("#printer_connect").html("<i class='fa fa-retweet'></i> Connect").removeClass("btn-danger").addClass("btn-default");
        }
    });
}