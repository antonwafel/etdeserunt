// Example functions
function isSignalRef(angle) {
    // Logic to determine if angle is a signal reference
    return angle.startsWith('signal:');
}

function normalizeAngle(angle) {
    // Logic to normalize angle
    return angle % 360;
}

// Example usage
function processAngle(labelAngle) {
    return isSignalRef(labelAngle) ? labelAngle : normalizeAngle(labelAngle);
}

// Usage
let angle = 'signal:angle';
let processedAngle = processAngle(angle);
console.log(processedAngle); // Outputs: 'signal:angle'

angle = 400;
processedAngle = processAngle(angle);
console.log(processedAngle); // Outputs: 40
