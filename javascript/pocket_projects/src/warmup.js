
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if (htmlElement.children) {
    Array.from(htmlElement.children).forEach((child) => {
      htmlElement.removeChild(child)
    });
  }
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = string;
  return htmlElement.appendChild(newParagraph);
};

htmlGenerator("Don't get excited. This project sucks ass.", partyHeader);