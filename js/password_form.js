var $password = $("#password");
var $confirmPassword = $("#confirm_password");

// Hide hints
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val()
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() 
}

function passwordEvent() {   
  // Find out if password is valid
  if (isPasswordValid()) {    
    // Hide hint if password is valid
    $password.next().hide();
  } else {
    // Show hint until password is valid
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  // Find out if password and confirmation match
  if (arePasswordsMatching()) {
    // Hide hint if they match
    $confirmPassword.next().hide()
  } else {
    // Show hint if they don't match
    $confirmPassword.next().show()
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

// When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent);

// When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();