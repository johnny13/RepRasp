/*! 3d Printer Touch Screen interface - v0.0.1 - 2015-07-28\n* https://www.huement.com/reprasp
* Copyright (c) 2015 Derek Scott; License: MIT */
 
/*! -- I Built This. Dont Hate. -- */


/* This Function is the First thing that happens and sets up all the page variables for htat page */

function start_page(){
  var startpage = $("#start_page").text();
  if(startpage !== undefined && startpage !== null){
    console.debug("current page: "+startpage);
    if(startpage == "index"){
      startindex();
    }
    if(startpage == "controls"){
      startcontrols();
    }
  }
}
 
function startindex(){ 
  //console.debug("start index page");
  getstatus();
}

function startcontrols(){ 
  $(".plus_x").on("click",function(eve){
    eve.preventDefault();
    var ra = $(".measured_amount .active").data("amount");
    var na = parseInt(ra,10);
    movedirection(na,0,0);
  });
  $(".minus_x").on("click",function(eve){
    eve.preventDefault();
    var ra = $(".measured_amount .active").data("amount");
    var na = parseInt("-"+ra,10);
    movedirection(na,0,0);
  });
  $(".plus_y").on("click",function(eve){
    eve.preventDefault();
    var ra = $(".measured_amount .active").data("amount");
    var na = parseInt(ra,10);
    movedirection(0,na,0);
  });
  $(".minus_y").on("click",function(eve){
    eve.preventDefault();
    var ra = $(".measured_amount .active").data("amount");
    var na = parseInt("-"+ra,10);
    movedirection(0,na,0);
  });
  $(".plus_z").on("click",function(eve){
    eve.preventDefault();
    var ra = $(".measured_amount .active").data("amount");
    var na = parseInt(ra,10);
    movedirection(0,0,na);
  });
  $(".minus_z").on("click",function(eve){
    eve.preventDefault();
    var ra = $(".measured_amount .active").data("amount");
    var na = parseInt("-"+ra,10);
    movedirection(0,0,na);
  });
  
  //Amount Picker
  $(".measured_amount .btn").on("click",function(eve){
    eve.preventDefault();
    $(".measured_amount .btn").removeClass('active');
    $(this).addClass('active');
  });
}

function movedirection(xamt,yamt,zamt){
  
  var xocto_url = GlobalURL+"/api/printer/printhead";
  var dirdata = {"command": "jog", "x":xamt, "y":yamt, "z":zamt};

  console.debug(dirdata);
  console.debug(xocto_url);
  var jd = JSON.stringify(dirdata);
  $.ajax({
      type: "post",
      url: xocto_url,
      dataType:"json",
      data: jd,
      contentType: "application/json",
      headers: { 'X-Api-Key': GlobalKey },
      success: function(data){
        console.debug(data);
      },
      error: function(data){
        console.debug(data);
      }
  });
}

function getstatus(){
    var octo_url = GlobalURL+"/api/connection";
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
        }
    });
}
 
var GlobalURL = "octopi.local:5000";
var GlobalKey = "";
var GlobalDebug = 0;
function configfile(){
    var octo_url = "webroot/files/defaults.json";
    $.ajax({
        type: "GET",
        url: octo_url,
        dataType:"JSON",
        success: function(data){
          console.debug(data.apiurl);
          GlobalKey = data.apikey;
          GlobalURL = "http://"+data.apiurl;
          GlobalDebug = data.debug;
          
          if(data.apiurl !== undefined && data.apiurl !== ""){
            if(data.debug == 1){
              //MumfordNote("Config Loaded",false,"success");
            }
            start_page();
          } else {
            //console.debug(data);
            MumfordNote("Error. Config Not Found",false,"error","true");
          }
        },
        error: function(data){
            console.debug(data);
        }
    });
}

$(document).ready(function() {
  configfile();
  
});
/*
$(document).ready(function() {
     
}); 
*/
/*
$(document).ready(function() {
     
}); 
*/ 