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