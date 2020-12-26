//Array of Motivational Messages
const messages = ["“The Best Way To Get Started Is To Quit Talking And Begin Doing. ” \n Walt Disney", "“Don’t Let Yesterday Take Up Too Much Of Today.” \n Will Rogers", "“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” \n Unknown", "“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” \n Inspirational Quote By Vince Lombardi","“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” \n Johann Wolfgang Von Goethe",
"“Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?” \n Brian Tracy"];


const generateMessage = () => {
    //generate a random number for index
const randomNumber = Math.floor((Math.random()*messages.length));
console.log(messages[randomNumber]);

};

generateMessage();