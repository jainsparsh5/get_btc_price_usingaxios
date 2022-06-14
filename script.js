const ul = document.querySelector('#btcPrices');
const btcBtn = document.querySelector('button');

const getBtcPrice = async () => {
    try{
        const res = await axios.get("https://api.blockchain.com/v3/exchange/tickers/BTC-USD");
        return res.data.price_24h;
    }
    catch(e){
        return "Oh not connection times out !"
    }
}

const showBtcPrice = async () => {
    const btcValue = await getBtcPrice();
    const currPrice = document.createElement('li');
    currPrice.append(btcValue);
    ul.append(currPrice);
}

btcBtn.addEventListener('click', showBtcPrice);