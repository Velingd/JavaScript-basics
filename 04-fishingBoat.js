function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);

    let rent = 0;

    if(season === 'Spring'){
        rent = 3000;
    } else if(season === 'Summer' || season === 'Autumn'){
        rent = 4200;
    } else{
        rent = 2600;
    }

    if(fisherCount <= 6){
        rent = rent - rent * 0.1;
    } else if(fisherCount >= 7 && fisherCount <= 11){
        rent = rent - rent * 0.15;
    } else{
        rent = rent - rent * 0.25;
    }

    if(fisherCount % 2 === 0 && season !== 'Autumn'){
        rent = rent - rent * 0.05;
    }

    if(budget >= rent){
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["2000", "Winter", "13"]);