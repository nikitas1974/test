// Κλήση της συνάρτησης showTime ανά δευτερόλεπτο
setInterval(showTime, 1000);
 
// Υλοποίηση συνάρτησης showTime
function showTime() {
    // Λήψη της τρέχουσας ώρας και ημερομηνίας
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    // Ρύθμιση ώρας για το 12ωρο τρόπο (από 0 έως 12) εμφάνισης της ώρας
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        " " +
        am_pm;
 
    // Εμφάνιση της ώρας
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}
 
showTime();