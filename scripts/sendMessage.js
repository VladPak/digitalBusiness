  window.addEventListener("DOMContentLoaded", function() {
    // get the form elements defined in your form HTML above
    var inputName = document.getElementById("name");
    var inputEmail = document.getElementById("email");
    var inputMsg = document.getElementById("message");

    var form = document.getElementById("my-form");
    var status = document.getElementById("successNotice");

    // Success and Error functions for after the form is submitted
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks! Your message was sent successfully!";
      setTimeout(window.location.reload.bind(location), 500);
    }

    function error() {
        form.reset();
        status.classList.add("error");
        status.innerHTML = "Empty input. Please check.";
        setTimeout(window.location.reload.bind(location), 500);
    }


    // handle the form submission event
    form.addEventListener("submit", function(ev) {
        if(inputName.value.length == 0 || inputEmail.value.length == 0 || inputMsg.value.length == 0){
          error();
        }
        else{
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
        }
    });
  });

  // helper function for sending an AJAX request
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      }
      else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
