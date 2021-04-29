function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 2000 && someValue <= 2500) {
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(someValue){
  const response = (someValue === "NYC") ? "Ok, sounds good." : "No go."
  return response;
}

function switchOnCharmFromTip(someValue){
  switch (someValue) {
    case "generous" : 
      return "Thank you so much.";
      break;
    case "not as generous" :
      return "Thank you."
      break;
    case "thanks for everything" :
      return "Bye."
      break;
  }
}