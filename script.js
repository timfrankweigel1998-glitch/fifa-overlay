async function updateData() {

    const response = await fetch("data.json");
    const data = await response.json();

    document.getElementById("time").innerText =
        data.minute + "'";

    document.getElementById("score").innerText =
        data.home + " - " + data.away;
}

updateData();
setInterval(updateData, 5000);
