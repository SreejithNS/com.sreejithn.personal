function autoResizeDiv()
        {
            document.getElementById('main').style.height = window.innerHeight +'px';
        }
        window.onresize = autoResizeDiv;
        autoResizeDiv();
		
function login()
		{
		 var pass = document.getElementById("pass");
			if (pass.value == "unlock") {
				window.location.href = "home.html";
			} else {
				document.getElementById("display").innerHTML = "Password Wrong";
				pass.value = "";
			}
		}
		
				
function handle(e){
		var pass = document.getElementById("pass");
        if(e.keyCode === 13){
			if (pass.value == "unlock") {
				window.location.href = "home.html";
				event.preventDefault()
				return false;
			} else {
				document.getElementById("display").innerHTML = "Password Wrong";
				event.preventDefault()
				pass.value = "";
				return false;
			}
        }
    }
