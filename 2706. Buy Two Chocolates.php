class Solution {
    function buyChoco($prices, $money) {
    sort($prices);
    if( $prices[0] + $prices[1] > $money) return $money; else  return $money - ($prices[0] + $prices[1]);  
    }
}
