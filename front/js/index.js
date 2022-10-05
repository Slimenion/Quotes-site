const AUTHOR = "author";
const QUOTE = "quote";

const db = JSON.parse(data);
const authors = [];
const select = document.querySelector(`#${AUTHOR}`);

document.querySelector("#submitButon").addEventListener("click", updateQuote);

for (let note of db) {
    authors.push(note.author);
    let option = document.createElement("option");
    option.innerText = note.author;
    select.append(option);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function updateQuote(event) {
    const currentAuthor = select.value;

    const allQuotesCurrentAuthor = [];

    for (let note of db) {
        if (note.author == currentAuthor) {
            allQuotesCurrentAuthor.push(note.quote);
        }
    }

    const randValue = getRandomInt(0, allQuotesCurrentAuthor.length);

    document.querySelector(`#${QUOTE}`).innerHTML =
        allQuotesCurrentAuthor[randValue];
}
