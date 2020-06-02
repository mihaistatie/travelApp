import Pikaday from 'pikaday/pikaday.js';
import { FORMAT } from './dateConfig';
import moment from 'moment';
moment().format();


/* Pikaday from Copyright © 2014 David Bushell | BSD & MIT license */
const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: FORMAT,
  onSelect: function () {
    const departure = this.getMoment().format(FORMAT);
    return departure
  }
});

export default picker;
