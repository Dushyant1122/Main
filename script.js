const quotes = document.getElementById("quote")
const author = document.getElementById("author")
let realData = "";

const getNewQuotes = () =>{
    let rnum = Math.floor(Math.random() * 1000);
    console.log(rnum);
    quotes.innerText = `${realData[rnum].text}`
    author.innerText = `${realData[rnum].author}`
}
const getQuotes = async() => {
    const api = "https://type.fit/api/quotes" 
    try{
        let data = await fetch(api);
        realData = await data.json();

        getNewQuotes()
    }catch(error){}
}

getQuotes();