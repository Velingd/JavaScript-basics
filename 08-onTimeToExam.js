function onTimeToExam(input){
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTimeInMinutes = examHour * 60 + examMinute; // часа на изпита!
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute; // часа на пристигане на студента

    if(arrivalTimeInMinutes > examTimeInMinutes) {
        console.log('Late');

        let difference = arrivalTimeInMinutes - examTimeInMinutes;
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;

        if(difference >= 60){ // закъснение повече от час..
            if(minutes < 10){
                console.log(`${hours}:0${minutes} hours after the star`);
            } else{
                console.log(`${hours}:${minutes} hours after the star`);
            }

        } else{ // закъснели сме по-малко от час
            console.log(`${minutes} minutes after the star`);
        }


    } else if((examTimeInMinutes - arrivalTimeInMinutes) > 30){
        console.log('Early');

        let difference = examTimeInMinutes - arrivalTimeInMinutes;
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;

        if(difference >= 60){

            if(minutes < 10){
                console.log(`${hours}:0${minutes} hours before the start`);
            } else{
                console.log(`${hours}:${minutes} hours before the start`);
            }
        } else {
            console.log(`${minutes} after before the start`);
        }
    } else{
        console.log('On time');

        let difference = (examTimeInMinutes - arrivalTimeInMinutes);

        let minutes = difference % 60;

        console.log(`${minutes} minutes before the start`);
    }
}

onTimeToExam(["11", "30", "10", "55"])