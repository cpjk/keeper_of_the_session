console.log("keeping session alive at ", new Date(Date.now()))

show_timeout_alert = function() {
  keep_session_alive();
  console.log("kept session alive at ", new Date(Date.now()))
}

