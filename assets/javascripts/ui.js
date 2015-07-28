/* 
// ========== ========== ========== ========== ==========
// = BEGINING HUEMENT USER INTERFACE JAVASCRIPT SECTION =
// ========== ========== ========== ========== ==========
//
// Everything below here are elements added onto Bootstrap 3
// The build structure is controlled via Gruntfile.js
*/

/* hui verficication function */
$.hui = function(optionArray) {
var plugin = this;
var result = "";

 	if($.inArray("-v", optionArray) != -1){
	result += "hui version: I <3 Taylor Swift"+"\n";
}

if($.inArray("-m", optionArray) != -1){
	result += "hui manual available here: hui.huement.com/docs"+"\n";
}
	
if(result == ""){
	return "Are you lost?" + "\n";
} else {
	return result;
}
};

/* shuffle things */
/* example| jQuery.shuffle(colorArray); */
(function(jQuery){
  jQuery.fn.shuffle = function() {
    return this.each(function(){
      var items = jQuery(this).children();
      return (items.length) ? jQuery(this).html(jQuery.shuffle(items)) : this;
    });
  };
 
  jQuery.shuffle = function(arr) {
    for(
      var j, x, i = arr.length; i;
      j = parseInt(Math.random() * i),
      x = arr[--i], arr[i] = arr[j], arr[j] = x
    );
    return arr;
  }
})(jQuery);