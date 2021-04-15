
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = (dogs) => {
  const dogArray = [];
  for (const [breed, link] of Object.entries(dogs)) {
    const anchor = document.createElement('a');
    anchor.innerHTML = breed;
    anchor.href = link;
    const listItem = document.createElement('li');
    listItem.className = 'dog-link';
    listItem.appendChild(anchor);
    dogArray.push(listItem);
  }
  return dogArray;
}

const attachDogLinks = (arrayODogs) => {
  const dropDownDogs = document.querySelector('.drop-down-dog-list');
  arrayODogs.forEach(dogLI => {
    dropDownDogs.appendChild(dogLI);
  })
}

attachDogLinks(dogLinkCreator(dogs));