$("#createLeadBtn").click(function() {
  $.ajax({
    url: `https://migration.pabau.me/OAuth2/leads/lead-curl.php?api_key=MTIzMDka02efd5b36cb3a55fccc71d09e036a31&redirect_link=https://amazon.com/lead&Fname=${$("#leadFirstName").val()}&Lname=${$("#leadLastName").val()}&email=${$("#leadEmail").val()}`,
    type: "POST",
    dataType: 'jsonp'
  })
  return false;
});