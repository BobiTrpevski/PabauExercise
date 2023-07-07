$("#createLeadBtn").click(function() {
  let apikey = "MTIzMDka02efd5b36cb3a55fccc71d09e036a31";
  let redirectLink = "https://bobitrpevski.github.io/PabauExercise/";
  let firstName = $("#leadFirstName").val();
  let lastName = $("#leadLastName").val();
  let email = $("#leadEmail").val();

  $.ajax({
    url: `https://migration.pabau.me/OAuth2/leads/lead-curl.php?api_key=${apikey}&redirect_link=${redirectLink}&Fname=${firstName}&Lname=${lastName}&email=${email}`,
    type: "POST",
    dataType: 'jsonp',
    success: function (response) {
      toastr.success('Contact is succesfully added')
    },
    error: function (error) {
      toastr.error('There has been an error')
    }
  });

  return false;
});