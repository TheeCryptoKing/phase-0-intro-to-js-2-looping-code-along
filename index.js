// Code your solutions in this file


function writeCards( namesArray, event ) {//2 parameters 1 for event
    let thankYouCards = [];//create blank array
    for ( let i = 0; i < namesArray.length; i++ ) {//for loop that ends a when i catches up with namesArray length. Nut who defines that? 
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` );//putting thank you messages for every name provided 
    }
    return thankYouCards;// bst way to create data and recall it
    }
    
function countDown(num) {
    while (num >= 0 ) {
        console.log(num); //no return needed nice, dangerous fro infinti loops though 
        num--
    }
}


