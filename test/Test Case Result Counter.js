function generateTestReport(resultsArray) {
    let passedCount = 0;
    let failedCount = 0;
    let skippedCount = 0;
    const totalTests = resultsArray.length;

    // Use a for loop to iterate through the results and count each outcome
    for (let i = 0; i < totalTests; i++) {
        const result = resultsArray[i];
        if (result === "pass") {
            passedCount++;
        } else if (result === "fail") {
            failedCount++;
        } else if (result === "skip") {
            skippedCount++;
        }
    }

    // Calculate the pass rate percentage
    // Prevent division by zero if totalTests is 0
    const passRate = totalTests > 0 ? ((passedCount / totalTests) * 100).toFixed(2) : 0;

    // Determine the verdict based on the number of failures
    let verdict;
    if (failedCount === 0) {
        verdict = "All tests passed → Ready for release";
    } else if (failedCount <= 2) {
        verdict = "≤2 failures → Review required";
    } else {
        verdict = ">2 failures → Block release";
    }

    // Print the final test report
    console.log("--- Test Report ---");
    console.log(`Total Tests Run: ${totalTests}`);
    console.log(`Passed: ${passedCount}`);
    console.log(`Failed: ${failedCount}`);
    console.log(`Skipped: ${skippedCount}`);
    console.log(`Pass Rate: ${passRate}%`);
    console.log(`Verdict: ${verdict}`);
    console.log("-------------------");
}

// Example usage:
const testSuiteResults = ["pass", "fail", "pass", "skip", "fail", "pass", "pass", "fail", "pass", "pass"];
generateTestReport(testSuiteResults);

// Example with a different failure count:
// const testSuiteResultsSevere = ["fail", "fail", "fail", "pass", "skip"];
// generateTestReport(testSuiteResultsSevere);
