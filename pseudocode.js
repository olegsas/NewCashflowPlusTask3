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

if((Usd > 0) && (Byr < 0)){
    weNeedUsd = Math.round(-Byr / rate);
    // money for compensate -Byr
    if(Usd >= weNeedUsd){
        // we have enough money for compensate -Byr
        exchange(cycleTimeDay, ratesH, weNeedUsd, "Usd", "Byr");
    }

    if(Usd < weNeedUsd){
        // we have not enough money, we will sell all Usd
        weTakeUsd = Usd; // we take all Usd money
        weHaveByr = Math.round(weTakeUsd * rate);
        // how many Byr we have if we sell all Usd
        exchange(cycleTimeDay, ratesH, weTakeUsd, "Usd", "Byr");
    }
}