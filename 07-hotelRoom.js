function hotelRoom(input){
    let month = input[0];
    let nights = Number(input[1]);

    let Studio = 0;
    let Apartment = 0;

    switch(month){
        case 'May':
        case 'October':
            Studio = nights * 50;
            Apartment = nights * 65;

            if(nights > 7 && nights <= 14){
                Studio = Studio - Studio * 0.05;
            } else if(nights > 14) {
                Studio = Studio - Studio * 0.30;
            }
        break;
        case 'June':
        case 'September':
            Studio = nights * 75.2;
            Apartment = nights * 68.70;

            if(nights > 14){
                Studio = Studio - Studio * 0.20;
            }

        break;

        case 'July':
        case 'August':
            Studio = nights * 76;
            Apartment = nights * 77;

        break;

        
    }

    if(nights > 14){
        Apartment = Apartment - Apartment * 0.10;
    }

    console.log(`Apartment: ${Apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${Studio.toFixed(2)} lv.`);
}

hotelRoom(["August", "20" ]);