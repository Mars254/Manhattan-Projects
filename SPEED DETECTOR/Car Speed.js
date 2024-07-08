
function checkSpeed() {
    const speedInput = document.getElementById('speedInput');
    const points = document.getElementById('points');
    const speed = parseInt(speedInput.value);

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    if (speed <= speedLimit) {
        points.textContent = "Ok✅";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > maxDemeritPoints) {
            points.textContent = "License suspended❌";
        } else {
            points.textContent = `Points: ${demeritPoints}`;
        }
    }
}
