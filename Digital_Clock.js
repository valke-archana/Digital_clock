function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? 'PM' : 'AM'; //If hours ≥ 12 → PM, Else → AM
    hours = hours % 12 || 12;

    /* Converts the number into a string
       Needed because padStart() works only on strings
       Make the string at least 2 characters long
       If it’s shorter, add '0' at the beginning */

    hours = hours.toString().padStart(2, '0'); 
    minutes = minutes.toString().padStart(2, '0'); 
    seconds = seconds.toString().padStart(2, '0');

    let timeStr = `${hours}:${minutes}:${seconds} ${ampm}`;

    //This object defines how the date should look.
    
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateStr = now.toLocaleDateString(undefined, options);

    document.getElementById("clock").innerText = timeStr;
    document.getElementById("date").innerText = dateStr;
};
setInterval(updateClock, 1000);
updateClock();