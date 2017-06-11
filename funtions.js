
$(document).on("pagecreate","#home",function(){
	 $( document ).on( "swipe", "#home", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).

                $( "#panel" ).panel( "open" );
    });

});

//$( document ).on( "pagecreate", "#home", function() {
//};

$(document).on( "pagecreate", "#index", function() {

	$("#login-btn").on("tap",function login(){
	var pass = document.getElementById("pass").value;
	var password = "demo";
	if (pass == password ) {
		$.mobile.changePage( "#home", { transition: "slidefade"});
		$("#pass").val("");
		return false;
	} else {
		$.mobile.changePage( "#login-error", { transition: "pop",overlayTheme: "b"});
		$("#pass").val("");
	};

	});
});

function login(){
	var pass = document.getElementById("pass").value;
	var password = "demo";
	if (pass == password ) {
		$("#pass").val("");
		$.mobile.changePage( "#home", { transition: "slidefade"});
	} else {
		$.mobile.changePage( "#login-error", { transition: "pop",overlayTheme: "b"});
		$("#pass").val("");
	}
}

 function onLoad()
            {
                  document.addEventListener("deviceready", onDeviceReady, true);
            }

            function exitFromApp()
             {
				 if (navigator.app) {
                        navigator.app.exitApp();
                    }
                    else if (navigator.device) {
                        navigator.device.exitApp();

                    }
             }
