function mostrar()
{
 	if (document.getElementById('botaoLogin').value == 'Login')
 	{
 		document.getElementById('botaoLogin').value = 'Esconder';
 		document.getElementById('formLogin').className = 'visivel';
 	}
 	else
 	{
 		document.getElementById('botaoLogin').value = 'Login';
 		document.getElementById('formLogin').className = '';
 	}
}

function validarEmail()
{
    var x=document.getElementById('email').value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
      {
      window.alert("Email não válido!");
      return false;
      }
}

function validar()
{
    if (document.getElementById('email'.value != "" && 'validarEmail()' == true){
 		if (document.getElementById('password'.value != "")) {
 			if (document.getElementById('date'.value != "")) {
 				if (document.getElementById('captcha'.value == "2")) {
                    return true;
 				}
 				else{
                     window.alert("Erro!");
                     document.getElementById('captcha'.background-color = #FF0000);
 			         document.getElementById('submit').disable=true;
                    }
            }
 			else{
                 window.alert("Erro!");
                 document.getElementById('date'.background-color = #FF0000) ;
 		         document.getElementById('submit').disable=true;
                }
        }
 	    else{
             window.alert("Erro!");
             document.getElementById('password'.background-color = #FF0000) ;
             document.getElementById('submit').disable=true;
            }
    }
	else{
         window.alert("Erro!");
         document.getElementById('email'.background-color = #FF0000) ;
         document.getElementById('submit').disable=true;
        }
}