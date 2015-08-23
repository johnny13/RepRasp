/*! 3d Printer Touch Screen interface - v0.0.1 - 2015-08-22\n* https://www.huement.com/reprasp
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
  $("#printer_connect").on("click",function(eve){
    eve.preventDefault();
    getstatus();
  });
  
  //console.debug("start index page");
  getstatus();
}

var controlstartlimit = 0;
function startcontrols(){ 
  controlstartlimit++;
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
/* 
* default variables
* globalkey and globalurl are overridden on load
*/

var GlobalURL = "octopi.local:5000";
var GlobalKey = "";
var GlobalDebug = 0;
var GlobalContainer = $("#reprasp_main");

function start_page(){
  var savedvalue = $.jStorage.get("lastpage11");
  if(savedvalue == null || savedvalue == undefined || savedvalue == ""){
    var pageid = "status";
    var curl = pageid+".html";
    LoadNewPage(curl,pageid);
  } else {
    var pageid = savedvalue;
    var curl = pageid;
    LoadNewPage(curl,pageid);
  }
}

/* 
IMPORTANT Function
This function fires on each page load and can load one time or all time functions
ie. clicks, or status updates
*/
function LoadThisPage(){
  
  if($(".navmenu-fixed-right").hasClass("in") === true){
    $(".action-button").trigger("click");
  }
  
  var sv = currentpageid;
  if(sv == "status.html"||sv == "status"){ 
    startindex();
  } else if(sv == "control.html"||sv == "control"){
    startcontrols();
  } else {
    startindex();
  }
}
 
/*  
*  This Function is the First thing that happens and 
*  sets up all the page variables for that page 
*/
function getURLParameters(url){

    var result = {};
    var searchIndex = url.indexOf("?");
    if (searchIndex == -1 ) return result;
    var sPageURL = url.substring(searchIndex +1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {       
        var sParameterName = sURLVariables[i].split('=');      
        result[sParameterName[0]] = sParameterName[1];
    }
    return result;
}

function someFunction(site)     
{     
    return site.replace(/\/$/, "");
} 

function loadurl(){
  var url = document.URL;
  var apivalue = getURLParameters( url );
  console.debug(apivalue);
  
  if(document.location.port == 80 || document.location.port == "80" || document.location.port == "" || document.location.port == undefined){
    GlobalURL = someFunction(document.location.protocol +"//"+ document.location.hostname + document.location.pathname);
  } else {
    var portside = document.location.protocol +"//"+ document.location.hostname + ":"+document.location.port + document.location.pathname;
    console.debug(document.location.port);
    GlobalURL =  someFunction(portside);
  }
  
  
  if(apivalue.apikey == null || apivalue.apikey == undefined || apivalue.apikey == ""){
    var savedvalue = $.jStorage.get("apikey");
    if(savedvalue == null || savedvalue == undefined || savedvalue == ""){
      MumfordNote("Error. ?apikey= not set.",false,"error","true");
    } else {
      GlobalKey = savedvalue;
      start_page();
    }
  } else {
    var savedapivalue = $.jStorage.set("apikey", apivalue.apikey);
    GlobalKey = apivalue.apikey;
    start_page();
  }
}

var currentpageid = "";
function LoadNewPage(url,pageid){
  console.debug(url);
  currentpageid = pageid;
  
  if (url.toLowerCase().indexOf("html") >= 0){
    //gtg  
  } else {
    url = url+".html"; 
  }
  
  var finalurl = GlobalURL+"/"+url+"?apikey="+GlobalKey;
  console.debug(finalurl);
  $.ajax({
      type: "post",
      url: finalurl,
      dataType:"html",
      contentType: "text/html",
      success: function(data){
        console.debug(data);
        GlobalContainer.html(data);
        $.jStorage.set("lastpage11", currentpageid);
        setTimeout("LoadThisPage()",250);
      },
      error: function(data){
        console.debug(data);
        MumfordNote("API ERROR. Page Not Loaded.",false,"error");
      }
  });
}

var configmode = "url";

$(document).ready(function() {
  /*
  $(".minset li a").each(function(){
    var currenturl = $(this).attr("href");
    var newurl = currenturl+"?apikey="+GlobalKey;
    $(this).attr("href",newurl);
  });
  test
  */ 
      
  if($("#reprasp_main").html() !== null && $("#reprasp_main").html() !== undefined ){
    $(".minset li a").on("click",function(eve){
      eve.preventDefault();
      var pageid = $(this).data("pageid");
      var curl = pageid+".html";
      LoadNewPage(curl,pageid);
    });
  
    if(configmode == "file"){
      configfile();
    } else {
      loadurl();
    }
  }
  
  
});