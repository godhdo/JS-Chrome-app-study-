const quotes = [
    {
        quote: "자신의 가족을 가르칠 수 없는 자는 남을 가르칠 수 없다.",
        author: "Confucius",
    },
    {
        quote: "배움은 의무도, 생존도 아니다.",
        author: "W. Edwards Deming",
    },
    {
        quote: "자신을 화나게 했던 행동을 다른 이에게 행하지 말라.",
        author: "Socrates",
    },
    {
        quote: "백만 가지 사실을 머릿속에 집어넣고도 여전히 완전히 무지할 수 있다.",
        author: "Alec Bourne",
    },
    {
        quote: "젊었을 때 배움을 게을리 한 사람은 과거를 상실하며 미래도 없다.",
        author: "Euripides",
    },
    {
        quote: "목적없는 공부는 기억에 해가 될 뿐이며, 머리속에 들어온 어떤 것도 간직하지 못한다.",
        author: "Leonardo da Vinci",
    },
    {
        quote: "인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다.",
        author: "Charlie Chaplin",
    },
    {
        quote: "반성하지 않는 삶은 살 가치가 없다.",
        author: "Socrates",
    },
    {
        quote: "약간의 광기를 띠지 않은 위대한 천재란 없다.",
        author: "Seneca",
    },
    {
        quote: "자신감은 위대한 과업의 첫째 요건이다.",
        author: "Samuel Johnson",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;