import defaultImage from '../styles/default.jpg';

 //Set a default image if the result is  null

const imageCheck = (img) => {
  return img ?? defaultImage;
};

 //Update UI with"City Break" if  the result is null

const cityCheck = (city) => {
  return city ?? "City Break";
};

export {
  imageCheck,
  cityCheck
}