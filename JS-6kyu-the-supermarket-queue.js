function queueTime(customers, n) {
  let tills = Array(n).fill(0); // Initialize an array of tills with initial times as 0
    for (let i = 0; i < customers.length; i++) {
        let nextCustomer = customers[i];
        let nextTill = tills.indexOf(Math.min(...tills)); // Find the till with the shortest waiting time
        tills[nextTill] += nextCustomer; // Add the time for the next customer to the chosen till
    }
    return Math.max(...tills); // Return the maximum time among all tills
}
