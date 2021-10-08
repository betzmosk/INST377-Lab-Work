/* eslint-disable no-unused-expressions */
/* eslint-disable no-irregular-whitespace */
async function windowFunctions() {
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const request = await fetch(endpoint);
  const establishments = await request.json();

  function findMatches(WordToMatch, establishments) {
  return establishments.filter((establishment) => {
    const regex = new RegExp(WordToMatch, 'gi');
      return establishment.category.match(regex) || establishment.zip.match(regex);
    });
  }
  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, establishments);
    const html = matchArray.map(establishment => {
      return `
        <li>
            <span class='namezip'>${establishment.name}</span></br>
            <span class='category'>${establishment.category}</span></br>
            <span class='category'><em>${establishment.address_line_1}</em></span></br>
            <span class='category'><em>${establishment.city}</em></span></br>
            <span class='namezip'><em>${establishment.zip}</em></span></br>
        </li>
        </br>
        `;
    }).join('');
    results.innerHTML = html;
  }
  const searchInput = document.querySelector('.input');
  const results = document.querySelector('.results');
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => {
    displayMatches(evt);
  });
}
window.onload = windowFunctions();