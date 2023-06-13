let btn=document.getElementById("new-quote");
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The best way is to loose yourself in the service of others."`,
    person: `Benjamin franklin`
},{
    quote: `"It does not matter how slowly you go as long as you do not stop"`,
    person:`Confucius`
},{
    quote:`"Our lives begin to end the day we become silent about things that matter"`,
    person:`Martin Luther King, Jr.`
},{
    quote:`"Remember that not getting what you want is sometimes a wonderful stroke of luck"`,
    person:`Dalai Lama`
},{
    quote: `"If you look at what you have in life you will always have more,If you look at what you do not have in life ,you will never have enough."`,
    person:`Oprah Winfey`
},{
    quote:`"The journey of a thousand miles begins with one step."`,
    person:`Lao Tzu`
},];
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() *quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

});

