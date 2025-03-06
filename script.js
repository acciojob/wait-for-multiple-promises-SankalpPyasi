// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createRandomPromise(index) {
    const delay = Math.random() * (3 - 1) + 1; // Random time between 1 and 3 seconds
    return new Promise(resolve => {
        setTimeout(() => resolve({ index, time: delay.toFixed(3) }), delay * 1000);
    });
}

// Create 3 promises
const promise1 = createRandomPromise(1);
const promise2 = createRandomPromise(2);
const promise3 = createRandomPromise(3);

// Select the table body
const outputTable = document.getElementById("output");

// Execute all promises together
Promise.all([promise1, promise2, promise3]).then(results => {
    // Clear the loading row
    outputTable.innerHTML = "";

    // Populate the table with the resolved results
    results.forEach(result => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>Promise ${result.index}</td><td>${result.time}</td>`;
        outputTable.appendChild(row);
    });

    // Find the total time taken (the longest individual promise)
    const totalTime = Math.max(...results.map(res => parseFloat(res.time)));

    // Add the total time row
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime.toFixed(3)}</strong></td>`;
    outputTable.appendChild(totalRow);
});
