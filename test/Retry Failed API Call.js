/**
 * Simulates a flaky API call with a 40% chance of success.
 * @returns {boolean} True if successful, false if failed.
 */
function mockApiCall() {
    // Math.random() > 0.6 gives a 40% chance of success (0.61 to 1.0)
    return Math.random() > 0.6;
}

let attempt = 0;
let maxRetries = 5;
let isSuccess = false;

console.log("--- Starting API Call Scenario ---\n");

do {
    attempt++;
    console.log(`Attempt ${attempt}: Sending API request...`);

    if (mockApiCall()) {
        isSuccess = true;
        console.log(`Attempt ${attempt}: ✅ Success!`);
        break; // Exit loop immediately on success
    } else {
        console.log(`Attempt ${attempt}: ❌ Failed.`);
    }

    // If we haven't reached max retries, wait before next attempt
    if (attempt < maxRetries) {
        console.log(`Retrying...`);
    }

} while (attempt < maxRetries);

// Final Result
console.log("\n--- Final Result ---");
if (isSuccess) {
    console.log("API call completed successfully.");
} else {
    console.log(`API call failed after ${maxRetries} attempts.`);
}
