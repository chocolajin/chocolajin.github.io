const quotes = [
    {quote: "사랑은 무엇보다도 자신을 위한 선물이다",
    author:"Jean Anouilh"},
    {quote: "우리는 젊을 때에 배우고 나이가 들어서 이해한다",
    author:"Marie Ebner von Eschenbach"},
    {quote: "성숙하다는 것은 다가오는 모든 생생한 위기를 피하지 않고 마주하는 것을 의미한다",
    author:"Fritz Kunkel"},
    {quote: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 해줄 수 없다",
    author:"Carol Burnett"},
    {quote: "좋은 책을 읽는 것은 과거 몇 세기의 가장 훌륭한 사람들과 이야기를 나누는 것과 같다",
    author:"Rene Descartes"},
    {quote: "이 사랑의 꽃봉오리는 여름날 바람에 마냥 부풀었다가, 다음 만날 때엔 예쁘게 꽃필 거예요",
    author:"William Shakespeare"},
    {quote: "당신을 만나는 모든 사람이 당신과 헤어질 때는 더 나아지고 더 행복해질 수 있도록 하라",
    author:"Mother Teresa"},
    {quote: "경험을 현명하게 사용한다면, 어떤 일도 시간 낭비는 아니다",
    author:"Auguste Rodin"},
    {quote: "절대로 고개를 떨구지 말라. 고개를 치켜들고 세상을 똑바로 바라보라",
    author:"Helen Keller"},
    {quote: "여러분이 할 수 있는 가장 큰 모험은 바로 여러분이 꿈꿔오던 삶을 사는 것입니다",
    author:"Oprah Winfrey"}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote
author.innerText = todayQuote.author
