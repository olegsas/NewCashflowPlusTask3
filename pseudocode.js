if((Byr > 0) && (Usd < 0)){
    weNeedByr = Math.round(-Usd * rate);
    // money for compensate -Usd
    if(Byr >= weNeedByr){
        // we have enough money for compensate -Usd
        exchange(cycleTimeDay, ratesH, weNeedByr, "Byr", "Usd");
    }

    if(Byr < weNeedByr){
        // we have not enough money, we will sell all Byr 
        weTakeByr = Byr; // we take all Byr money
        weHaveUsd = Math.round(weTakeByr/rate);
        // how many Usd we have if we sell all Byr
        exchange(cycleTimeDay, ratesH, weTakeByr, "Byr", "Usd");
    }
}