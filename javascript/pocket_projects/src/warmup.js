
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  const newParagraph = document.createElement('p');
  newParagraph.innerText = string;
  return htmlElement.appendChild(newParagraph);
};

htmlGenerator('Party Time.', partyHeader);