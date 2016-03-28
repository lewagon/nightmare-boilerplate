var Nightmare = require('nightmare');

// TODO: Change this code :)

new Nightmare({ weak: false, webSecurity: false })
  .goto("https://www.lewagon.com")
  .evaluate(function () {
      return document.querySelector('.banner-content h1').innerText;
    },
    function(topBannerText) {
      console.log(topBannerText);
    })
  .run(function(err, nightmare){
    console.log("Done.");
  });
