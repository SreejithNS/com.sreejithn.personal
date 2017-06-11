
$(document).on("mobileinit","#home",function(){
	 $( document ).on( "swipeleft", "#home", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#panel" ).panel( "open" );
            }
        }
    });

});

//$( document ).on( "pagecreate", "#home", function() {
//};

$(document).on( "pagecreate", "#index", function() {

	$("#login-btn").on("tap",function login(){
	var pass = document.getElementById("pass").value;
	var password = "demo";
	if (pass == password ) {
		$("#pass").val("");
		$.mobile.changePage( "#home", { transition: "slideup"});
	} else {
		$.mobile.changePage( "#login-error", { transition: "pop",overlayTheme: "b"});
		$("#pass").val("");
	};
	});
});



