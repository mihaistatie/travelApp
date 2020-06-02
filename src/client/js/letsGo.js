import fetchWrapper from 'fetchWrapper';
import FetchOptions from 'fetchWrapper/FetchOptions';
import moment from 'moment';
import { FORMAT } from './dateConfig';
import picker from './datePicker.js';
import { imageCheck, cityCheck } from './helpers';
import myIcons from './myIcons';

const button = document.getElementById('generate');

//Creating Travel UI

const travelContent = (data) => {
  //counting days from departure to current date
  let customToday = moment(moment().format(FORMAT), FORMAT, 'en');
  let customDays = customToday.diff(moment(picker.toString(), FORMAT, 'en'), 'days');
  let countdownText = (customDays) => {
    if (customDays < 0) {
      return `${Math.abs(customDays)} days left`
    } else if (customDays === 0) {
      return "Today";
    }
    return `${customDays} days ago`
  };

  //Define the weather icon
  const icon = myIcons(data.icon);

  //Create the card element
  let allInformation = document.createDocumentFragment();
  const card = document.createElement('div');
  card.className = "myMeteoContent";
  card.innerHTML = `
  <div class="contentTop">
    <img src="${imageCheck(data.img)}" alt="Picture of the destination" class="image" id="image">
    <button class="delete"><span class="fas fa-times"></span></button>
    <div class="days">${countdownText(customDays)}</div>
  </div>
  <div class="card-bottom">
    <div class="place">
      <h2 class="cityName">${cityCheck(data.city)}</h2>
      <h2>-</h2>
      <h2 class="countryName">${data.country}</h2>
    </div>
    <div class="customInfo">
      <div class="calendar"><span class="far fa-calendar-alt"></span> ${picker.toString('D/MM')}</div>
      <div class="temp"><span class="fas fa-thermometer-half"></span> ${data.temperature}°C</div>
      <div class="${icon}"><span class="fas fa-${icon}"></span></div>
    </div>
  </div>`;

  //Append the card element
  allInformation.appendChild(card);
  return allInformation;
};

// get the datas from APIS & update the UI */


const letsGo = async (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;

  const options = new FetchOptions({ city: city }, 'POST', {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  const data = await fetchWrapper('http://localhost:8000/add', options);

  const theCard = document.getElementById('theCard');
  theCard.appendChild(travelContent(data));
};

export {
  letsGo,
  button
}
