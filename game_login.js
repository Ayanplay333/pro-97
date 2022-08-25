// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
document.getElementById(player1_name_input);
document.getElementById(player2_name_input);
  // Store these values locally
localStorage.setItem(player1_name_input).value;
localStorage.setItem(player2_name_input).value;
  //Assign "game_page.html" to window.location
  window.location("game_page.html");
}
