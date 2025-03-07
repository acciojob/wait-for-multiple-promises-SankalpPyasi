// Function to generate a promise that resolves after a random time between 1 and 3 seconds
function createRandomPromise(index) {
    const randomTime = Math.random() * 2 + 1; // Between 1 and 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => resolve({ index, time: randomTime.toFixed(3) }), randomTime * 1000);
    });
}

function populateTable(results) {
    const output = document.getElementById('output');

    // Clear the "Loading..." row
    output.innerHTML = '';

    // Add each promise's result as a row
    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>Promise ${result.index}</td>
            <td>${result.time}</td>
        `;
        output.appendChild(row);
    });

    // Calculate the total time (the time taken by the longest promise)
    const totalTime = Math.max(...results.map(r => parseFloat(r.time)));

    // Add the total row
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td><strong>Total</strong></td>
        <td><strong>${totalTime.toFixed(3)}</strong></td>
    `;
    output.appendChild(totalRow);
}

// Create 3 promises with random delays
const promises = [
    createRandomPromise(1),
    createRandomPromise(2),
    createRandomPromise(3)
];

// Wait for all promises to resolve and then populate the table
Promise.all(promises).then(results => {
    populateTable(results);
});
