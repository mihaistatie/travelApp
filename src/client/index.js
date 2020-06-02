import { letsGo, button} from './js/letsGo';
import removeButton from './js/removeTravel'

import './styles/theInputs.scss';
import './styles/travelUI.scss';
import './styles/colors.scss';

export { 
  letsGo,
};

button.addEventListener('click', letsGo);
document.addEventListener('click', removeButton);