const AUTHOR = "author";
const QUOTE = "quote";
const EMPTY_QUOTE = "Либо у преподавателя нет цитат, либо вы ввели не правильную фамилию"

let db = JSON.parse(data);
const authors = [];
const select = document.querySelector(`#${AUTHOR}`);
const select_search = document.querySelector('#author_search')

document.querySelector("#submitButon").addEventListener("click", updateQuote);
document.querySelector("#submitButon_search").addEventListener("click", updateQuoteSelect);

function authorCheck(authors, author) {
    let c = false
    authors.forEach((element) => {
        let a = element.split(" ")[0]
        let b = author.split(" ")[0]
        if (a === b) {
            c = true
        }
    });
    return c;
}

async function getTextAnswer(url) {
    return await fetch(url).then(result => {
        return result.json()
    }).then(responseResult => {
        return responseResult
    })
}


getTextAnswer("https://functions.yandexcloud.net/d4eahqh17rjle04km5ot").then(elem => {
    console.log(elem)

})


for (let note of db) {
    if (!authorCheck(authors, note.author) && note.author.length < 30) {
        authors.push(note.author);
        let option = document.createElement("option");
        option.innerText = note.author;
        select.append(option);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function updateQuote(event) {
    let currentAuthor = select.value;

    const allQuotesCurrentAuthor = [];
    for (let note of db) {
        if (note.author === currentAuthor) {
            allQuotesCurrentAuthor.push(note.quote);
        }
    }

    const randValue = getRandomInt(0, allQuotesCurrentAuthor.length);

    document.querySelector(`#${QUOTE}`).innerHTML =
        allQuotesCurrentAuthor[randValue];
}

function updateQuoteSelect(event) {
    const currentAuthor = select_search.value;

    const allQuotesCurrentAuthor = [];
    for (let note of db) {
        if (note.author.split(" ")[0] === currentAuthor) {
            allQuotesCurrentAuthor.push(note.quote);
        }
    }
    if(allQuotesCurrentAuthor.length === 0) {
        document.querySelector(`#${QUOTE}`).innerHTML = EMPTY_QUOTE
    } else {
        const randValue = getRandomInt(0, allQuotesCurrentAuthor.length);

        document.querySelector(`#${QUOTE}`).innerHTML =
            allQuotesCurrentAuthor[randValue];
    }
}
