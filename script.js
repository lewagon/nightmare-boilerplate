var Nightmare = require('nightmare');

// TODO: Change this code :)

new Nightmare({ weak: false })
  .goto("http://www.lewagon.org")
  .evaluate(function () {
      return document.querySelector('.top-banner').innerText;
    },
    function(topBannerText) {
      console.log(topBannerText);
    })
  .run(function(err, nightmare){
    console.log("Done.");
  });
