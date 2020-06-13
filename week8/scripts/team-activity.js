let prevURL = null;
let nextURL = null;

let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

getAPI('https://swapi.dev/api/people');

function getAPI(url) {
    const regex = /(\b([0-9]|[1-9][0-9])\b)/;
    if (url == null) {
        return;
    }
    let UL = document.getElementById('items');
    UL.innerHTML = '';
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            nextURL = data.next;
            prevURL = data.previous;
            prevBtn.disabled = prevURL != null ? false : true;
            nextBtn.disabled = nextURL != null ? false : true;
            data.results.forEach(element => {
                let li = document.createElement('LI');
                li.innerHTML = `
                <h3 onclick="getDetails(${element.url.match(regex)})">${ element.name } </h3>
            `
                UL.appendChild(li);
            });
        });
}

function getDetails(url) {
    let div = document.getElementById('details');
    div.innerHTML = '';
    fetch('https://swapi.dev/api/people/' + url + '/')
        .then(response => response.json())
        .then(data => {
            div.innerHTML = `
                <h3>${ data.name } </h3>
                <ul>   
                    <li>height: ${data.height}</li>
                    <li>mass: ${data.mass}</li>
                    <li>hair color: ${data.hair_color}</li>
                    <li>skin color: ${data.skin_color}</li>
                    <li>eye color: ${data.eye_color}</li>
                    <li>birth year: ${data.birth_year}</li>
                    <li>gender: ${data.gender}</li>
                </ul>
            `
        });
}