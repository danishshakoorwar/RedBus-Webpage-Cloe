document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fromCity = document.getElementById('fromCity').value;
    const toCity = document.getElementById('toCity').value;
    const journeyDate = document.getElementById('journeyDate').value;

    if(fromCity && toCity && journeyDate) {
        alert(`Searching buses from ${fromCity} to ${toCity} on ${journeyDate}`);
    } else {
        alert('Please fill in all fields');
    }
});
