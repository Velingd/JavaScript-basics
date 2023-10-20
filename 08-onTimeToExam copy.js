function onTimeToExam(input){
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = (examHour * 60) + examMinute;
    let arrivalTime = (arrivalHour * 60) + arrivalMinute;

    let arrivalDifference = (arrivalTime - examTime);

    if(arrivalTime > examTime){
        if(arrivalDifference < 60){
            console.log(`${arrivalDifference} minutes after the start`);
        } else if(arrivalDifference > 60){
            let hours = Math.floor(arrivalDifference / 60);
            let minutes = Math.abs(arrivalDifference % 60);

            if(minutes < 10){
                console.log(`${hours}:0${minutes} hours after the start` );
            } else{
                console.log(`${hours}:${minutes} hours after the start` );
            }
        }
        console.log('Late');

    } else if( (examTime - arrivalTime) > 30){
            if(arrivalDifference < 60){
                console.log(`${arrivalDifference} minutes before the start`);
            } else if(arrivalDifference >= 60){
                let hours = Math.floor(arrivalDifference / 60);
                let minutes = Math.abs(arrivalDifference % 60);
                if(minutes < 10){
                    console.log(`${hours}:0${minutes} hours after the start` );
                } else{
                    console.log(`${hours}:${minutes} hours after the start` );
                }
            }
        console.log('Early');
    } else{
        if(arrivalDifference <= 0){
            console.log(`${Math.abs(arrivalDifference)} minutes before the start`);
        } else if(Math.abs(arrivalDifference) >= 60){
            let hours = Math.floor(arrivalDifference / 60);
            let minutes = Math.abs(arrivalDifference % 60);
            if(minutes < 10){
                console.log(`${hours}:0${minutes} hours after the start` );
            } else{
                console.log(Math.abs(`${hours}:${minutes}) hours after the start`));
            }
        }

        console.log('On time');
    }
}

onTimeToExam(["11", "30", "12", "29"]);