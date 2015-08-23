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