function newHouse(input){
    let flowersType = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch(flowersType){
        case "Roses":
            price = countFlowers * 5;
            if(countFlowers > 80){
                price = price * 0.9;
            } break;
 
        case "Dahlias":
            price = countFlowers * 3.8;
            if(countFlowers > 90){
                price = price * 0.85;
            } break;

        case "Tulips":
            price = countFlowers * 2.8;
            if(countFlowers > 80){
                price = price * 0.85;
            } break;

        case "Narcissus":
            price = countFlowers * 3;
            if(countFlowers < 120){
                price = price + price * 0.15;
            } break;

        case " Gladiolus":
            price = countFlowers * 2.5;
            if(countFlowers < 80){
                price = price + price * 0.2;
            } break;
    }

    if(budget >= price){
        console.log(`Hey, you have a great garden with ${countFlowers} ${flowersType} and ${(budget - price).toFixed(2)} leva left.`);
    } else{
        console.log(`Not enough money, you need ${(price  - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Tulips", "88", "260"]);