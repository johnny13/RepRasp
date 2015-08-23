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