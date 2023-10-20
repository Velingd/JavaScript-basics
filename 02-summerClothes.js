function summerClothes(input){
    let degree = Number(input[0]);
    let dayTime = input[1];

    let Outfit = "";
    let Shoes = "";

    switch(dayTime){
        case "Morning":
            if(degree >= 10 && degree <= 18){
                Outfit = "Sweatshirt";
                Shoes = "Sneakers";
            } else if(degree > 18 && degree <= 24){
                Outfit = "Shirt";
                Shoes = "Moccasins";
            } else{
                Outfit = "T-Shirt";
                Shoes = "Sandals"; 
            } break;

        case "Afternoon":
            if(degree >= 10 && degree <= 18){
                Outfit = "Shirt";
                Shoes = "Moccasins";
            } else if(degree > 18 && degree <= 24){
                Outfit = "T-Shirt";
                Shoes = "Sandals";
            } else{
                Outfit = "Swim Suit";
                Shoes = "Barefoot"; 
            } break;

        case "Evening":
            if(degree >= 10 && degree <= 18){
                Outfit = "Shirt";
                Shoes = "Moccasins";
            } else if(degree > 18 && degree <= 24){
                Outfit = "Shirt";
                Shoes = "Moccasins";
            } else{
                Outfit = "Shirt";
                Shoes = "Moccasins"; 
            } break;
    }   

    console.log(`It's ${degree} degrees, get your ${Outfit} and ${Shoes}.`);

}
summerClothes(["28", "Evening"]);