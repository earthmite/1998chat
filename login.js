function load () {
    document.getElementById('register').style="display:none;";
    document.getElementById('check').value="Register";
}
function register () {
    document.getElementById('register').style="height:100%;";
    document.getElementById('login').style="display:none";
    document.getElementById('check').value="Login";
    //document.getElementById('header').style="display:none";
}
function login () {
    document.getElementById('register').style="display:none;";
    document.getElementById('login').style="display:block;";
    document.getElementById('check').value="Register";
    //document.getElementById('header').style="display:none";
}
function check () {
    
    var che= document.getElementById('check').value;
    if(che=="Login")
    {
    document.getElementById('register').style="display:none;";
    document.getElementById('login').style="display:block;";
    document.getElementById('check').value="Register";
    }
    else
    {
        document.getElementById('register').style="height:100%;";
        document.getElementById('login').style="display:none";
        document.getElementById('check').value="Login";
    }
    
}
function validation()
{
    
    var check=document.getElementById('email').type;
    if(check=="email")
    {
        var value=document.getElementById('email').value;
        if(value=="")
        {

            document.getElementById('error').innerHTML="Incorrect Email Address";

        }
    }
}


