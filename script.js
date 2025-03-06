//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");

    // Function to create a promise that resolves after a random delay between 1 and 3 seconds
    function createPromise(index) {
        const delay = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
        return new Promise(resolve => {
            setTimeout(() => resolve({ index, time: delay.toFixed(3) }), delay * 1000);
        });
    }

    // Create three promises
    const promises = [createPromise(1), createPromise(2), createPromise(3)];

    // Use Promise.all() to wait for all promises to resolve
    const startTime = performance.now();
    Promise.all(promises).then(results => {
        const endTime = performance.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(3);

        // Clear the "Loading..." row
        output.innerHTML = "";

        // Populate the table with promise results
        results.forEach(result => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>Promise ${result.index}</td><td>${result.time}</td>`;
            output.appendChild(row);
        });

        // Add the total row
        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
        output.appendChild(totalRow);
    });
});
