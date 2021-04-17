
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = () => {
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

const attachDogLinks = () => {
  const dropDownDogs = document.querySelector('.drop-down-dog-list');
  const arrayODogs = dogLinkCreator(dogs);
  arrayODogs.forEach(dogLI => {
    dropDownDogs.appendChild(dogLI);
  })
}

attachDogLinks();

const handleEnter = () => {
  const dogLinks = document.querySelectorAll(".dog-link");
  dogLinks.forEach(link => link.classList.add('visible'));
}

const handleLeave = () => {
  const dogLinks = document.querySelectorAll(".dog-link");
  dogLinks.forEach(link => link.classList.remove('visible'));
}

const nav = document.querySelector(".drop-down-dog-nav");

nav.addEventListener('mouseenter', handleEnter);
nav.addEventListener('mouseleave', handleLeave);

