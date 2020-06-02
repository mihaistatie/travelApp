 //Creating a switch: each case corresponds to the User Interface

export default (expr) => {
  switch(expr) {
    case "clear-day" :
    case "clear-night" :
      return 'sun';
    case "rain" :
      return "cloud-showers-heavy";
    case "snow" :
      return "snowflake";
    case "wind" :
      return "wind";
    case "fog" :
      return "smog";
    case "cloudy" :
      return "cloud";
    case "partly-cloudy-day" :
    case "partly-cloudy-night" :
      return "cloud-sun";
    case "sleet" :
      return "cloud-rain";
  } 
 }