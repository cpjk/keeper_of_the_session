console.log("Keeping the session alive by fetching the page every 5 minutes.");

let INTERVAL_MINS = 5;

// async fetch the current path every 5 minutes
window.setInterval(()=> {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", window.location.href, true); // async fetch the current page
  xhr.send(null); // send the request
}, INTERVAL_MINS * 60 * 1000);

