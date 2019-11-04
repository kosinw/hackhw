(function getParticipantInfo() {
  fetch('https://hackhw-web.firebaseio.com/participants.json')
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          if (data < 50) {
            hero_button.parentElement.classList.remove('disabled-parent');
            hero_button.classList.remove('disabled');
          }

          if (data < 50) {
            hero_info.innerHTML += `<br /><br />Currently ${data} out of 50 participants have signed up so far!`;
          } else {
            hero_button.innerHTML = "Sign ups are no longer available.";
            hero_info.innerHTML += `<br /><br />Sorry we currently are maxed out of participants...<br />You can still sign up for our waitlist <a class="hero--waitlist">here</a>.`;
          }

          console.log(data);
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
      getParticipantInfo();
    });

})();


sponsors_button.addEventListener('click', function () {
  document.querySelector('.hero').scrollIntoView({
    behavior: 'smooth'
  });
})

