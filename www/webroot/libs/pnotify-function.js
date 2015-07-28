/* NDRIGS NOTIFICATION SETUP */

var stack_bar_top = {"dir1": "down", "dir2": "right", "push": "top", "spacing1": 0, "spacing2": 0, "firstpos1": 0, "firstpos2": 0};

function MumfordNote(ntitle,nmessage,ntype){

    var notetitle = false;
    if(ntitle != undefined && ntitle != false && ntitle != "false" && ntitle != 0){
        notetitle = ntitle;
    }

    var notemsg = false;
    if(nmessage != undefined  && nmessage != false && nmessage != "false" && nmessage != 0){
        notemsg = nmessage;
    }

    var notetype = "notice";
    if(ntype != undefined){
        notetype = ntype;
    }

    var opts = {
        title: notetitle,
        text: notemsg,
        mouse_reset: false,
        hide: true,
        addclass: "stack-bar-top",
        stack: stack_bar_top,
        width: "100%",
        shadow: false,
        cornerclass: "",
        styling: "fontawesome",
        delay: 5000,
        type: notetype,
        buttons: {
            closer: true,
            closer_hover: false,
            sticker: false
        }
    };

    new PNotify(opts);
}