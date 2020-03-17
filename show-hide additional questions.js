// Show/hide additional questions

// 1st argument is the initial question
// 2nd argument is the additional to hide and only show if user selects No to initial question
// 3rd argument is the answer to initial question which causes the additional question to show
function attach_show_hide(initialQuestion, additionalQuestion, showFor){

    function show_hide(initialQuestion, additionalQuestion, showFor){
        // if initial question equals argument 3, show additional question
        if(sits_get_value($("[" + initialQuestion + "]> :input").eq(0).attr("id")) == showFor){
            sits_show($("[" + additionalQuestion + "]").closest(".sv-form-group"));
        // if initial question doesn't equal argument 3, hide additional question
        } else if (sits_get_value($("[" + initialQuestion + "]> :input").eq(0).attr("id")) != showFor){
            sits_hide($("[" + additionalQuestion + "]").closest(".sv-form-group"));
            // Empty the additional question value if they change away from'showFor' value
            sits_set_value($("[" + additionalQuestion + "]").eq(0).attr("id"), "");
        }
    }


    // show/hide aditional question when page loads
    show_hide(initialQuestion, additionalQuestion, showFor)

    // add on change even to initial question
    sits_attach_event($("[" + initialQuestion + "]"), "change", function(){
        show_hide(initialQuestion, additionalQuestion, showFor);
    })
}


function PageLoad(){
    // More questions can be added by adding to this list and including data-ttq* in the TTQ attribute
    attach_show_hide("data-ttq1","data-ttq2", "Yes");
    attach_show_hide("data-ttq1","data-ttq3", "Yes");
}

sits_attach_event(window, "load", PageLoad);