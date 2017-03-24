function validate(){
      var user = document.getElementById('user').value;
      var pass = document.getElementById('pass').value;
      if ( user == "user" && pass == "pass")
          location = 'dashboard.html';
      else{
          var message=document.getElementById("message");
          message.innerHTML = "*Invalid credentials";
      }
      return false;
  }