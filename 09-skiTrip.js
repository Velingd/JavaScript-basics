function skiTrip(input){
    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let price = 0;

    switch(typeOfRoom){

        case 'room for one person':
            price = nights * 18;

            break;

        case 'apartment':
            price = nights * 25;
            if(nights < 10){
                 price = price - price * 0.3; 
            } else if(nights >= 10 && nights < 15){
                price = price - price * 0.35;
            } else{
                price = price - price * 0.50;
            } break;

        case 'president apartment':
            price = nights * 35;

            if(nights < 10){
                price = price - price * 0.1; 
           } else if(nights >= 10 && nights < 15){
               price = price - price * 0.15;
           } else{
               price = price - price * 0.20;
           } break;

    }

    if(feedback === 'positive'){
        price = price + price * 0.25;
    } else{
        price = price - price * 0.10;;
    }

    console.log(`${price.toFixed(2)}`);
}

skiTrip(["2", "apartment", "positive"]);