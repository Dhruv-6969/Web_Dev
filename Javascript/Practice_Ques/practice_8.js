prices = [250, 645, 300, 900, 50];

for(i = 0; i<prices.length; i++)
{
    prices[i] = prices[i] - prices[i]/10;
}

console.log(prices)