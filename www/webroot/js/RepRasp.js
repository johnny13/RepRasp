/*! 3d Printer Touch Screen interface - v0.0.1 - 2015-07-28\n* https://www.huement.com/reprasp
* Copyright (c) 2015 Derek Scott; License: MIT */
 
/*! -- I Built This. Dont Hate. -- */


/*
* ACTION FUNCTIONS
*
* this file contains all the UI Commands.
* app functions. anything not related to the API
*/ 

/* PAGE START UP
* each page has an id that triggers a page load function unique to that page
* this is done so we dont need multiple document ready scripts and whatnot
*/
function startindex(){ 
  //console.debug("start index page");
  getstatus();
}

function startcontrols(){ 
  //move printhead
  xyz_clicks();
  
  //selected tool amount
  mmspinner();
  
  //home axis buttons
  homerow_clicks();
  
  //move amount picker
  $(".measured_amount .btn").on("click",function(eve){
    eve.preventDefault();
    $(".measured_amount .btn").removeClass('active');
    $(this).addClass('active');
  });
}

function mmspinner(){
  var action;
    $(".number-spinner button").mousedown(function () {
        btn = $(this);
        input = btn.closest('.number-spinner').find('input');
        btn.closest('.number-spinner').find('button').prop("disabled", false);

    	if (btn.attr('data-dir') == 'up') {
            action = setInterval(function(){
                if ( input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max')) ) {
                    input.val(parseInt(input.val())+5);
                }else{
                    btn.prop("disabled", true);
                    clearInterval(action);
                }
            }, 50);
    	} else {
            action = setInterval(function(){
                if ( input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min')) ) {
                    input.val(parseInt(input.val())-5);
                }else{
                    btn.prop("disabled", true);
                    clearInterval(action);
                }
            }, 50);
    	}
    }).mouseup(function(){
        clearInterval(action);
    });
}

function homerow_clicks(){
  $(".home_x").on("click",function(eve){
    eve.preventDefault();
    var homearr = {"command": "home","axes":["x"]};
    homeaxis(homearr);
  });
  $(".home_y").on("click",function(eve){
    eve.preventDefault();
    var homearr = {"command": "home","axes":["y"]};
    homeaxis(homearr);
  });
  $(".home_z").on("click",function(eve){
    eve.preventDefault();
    var homearr = {"command": "home","axes":["z"]};
    homeaxis(homearr);
  });
}

function xyz_clicks(){
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
}
/*
* PRINT FUNCTIONS
*
* this file contains all the API Interactions.
*/ 

function movedirection(xamt,yamt,zamt){
  
  var xocto_url = GlobalURL+"/api/printer/printhead";
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
  
  var hocto_url = GlobalURL+"/api/printer/printhead";
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
          $(".status_panel").removeClass("panel-default").addClass("panel-danger");
            $(".status_lead ").addClass("alert-danger");
            $("#mac_state").text("unreachable");
            $("#printer_connect").html("<i class='fa fa-retweet'></i> Connect").removeClass("btn-danger").addClass("btn-default");
        }
    });
}
/* 
* default variables
* globalkey and globalurl are overridden on load
*/

var GlobalURL = "octopi.local:5000";
var GlobalKey = "";
var GlobalDebug = 0;

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
 
/*  
*  This Function is the First thing that happens and 
*  sets up all the page variables for that page 
*/
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
            $(".status_panel").removeClass("panel-default").addClass("panel-danger");
            $(".status_lead ").addClass("alert-danger");
            $("#mac_state").text("no config found");
        }
    });
}

$(document).ready(function() {
  configfile();
});