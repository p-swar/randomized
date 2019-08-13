var hungryButton = $('.hungry-button')
var message = $('.new-message')
var messageLonely = $('.lonely-message')

var hungryMessage = ["Blacktap (american) in Herald Square, Midtown, or Soho", "Top Thai (thai) in Greenwich", "Laut (malaysian) in Union Square", "886 (taiwanese) in East Village", "Junoon (indian) in Flatiron"];

hungryButton.on("click", restaurants);

function restaurants() {
  event.preventDefault();
  console.log("you just clicked the hungry button");
  var randomNumber = Math.floor(Math.random() * hungryMessage.length);
  var hungryButtonChosen = hungryMessage[randomNumber];
  message.text(hungryButtonChosen);
}



var exploreButton = $('.explore-button')

var exploreMessage = ['Brooklyn Bridge in Brooklyn', 'THe Highline in Chesea', 'Washington Square Park in Greenwich', 'The Tenement Museum in the Lower East Side', 'The Loeb Boathouse in Central Park', 'The Met Cloisters in Washington Heights'];

exploreButton.on("click", places)
function places() {
  event.preventDefault();
  console.log('you just clicked the explore button');
  var randomNumberExplore = Math.floor(Math.random() * exploreMessage.length);
  var exploreButtonChosen = exploreMessage[randomNumberExplore];
  message.text(exploreButtonChosen);

}


var lonelyButton = $('.lonely-button')

var lonelyMessage = [
   // 'Alexa', 'Google Home', 'Instagram', 'Snapchat', 'Quora', 'Twitter', 'Facebook'
"<a href = 'https:/www.amazon.com/s?k=alexa&ref=nb_sb_noss_2'> Alexa </a>",
 // "Google Home" + 'src = 'https:/store.google.com/us/product/google_home?hl=en-US''


];


//['Alexa', 'Google Home', 'Instagram', 'Snapchat', 'Quora', 'Twitter', 'Facebook']


lonelyButton.on('click', alone)
function alone(){
  event.preventDefault();
  console.log('you just clicked the lonely button');
  var randomNumberLonely = Math.floor(Math.random() * lonelyMessage.length);
  var lonelyButtonChosen = lonelyMessage[randomNumberLonely];
  message.text(lonelyButtonChosen);
}
