function trip(input){
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let place = "";
    let sum = 0;

    if(budget <= 100){
        destination = "Bulgaria";
        if(season === 'summer'){
            sum = budget * 0.3;
            place = "Camp";
        } else{
            sum = budget * 0.7;
            place = "Hotel"
        }
    } else if(budget <= 1000){
        destination = "Balkans"
        if(season === 'summer'){
            sum = budget * 0.4;
            place = "Camp";
        } else{
            sum = budget * 0.8;
            place = "Hotel"
        }
    } else{
        destination = "Europe";
        sum = budget * 0.9;
        place = "Hotel"
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${(sum).toFixed(2)}`);
}

trip(["50", "summer"]);