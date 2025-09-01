function parseBigInt(value, base) {
    const digits = '0123456789abcdefghijklmnopqrstuvwxyz';
    let result = 0n;
    const bigBase = BigInt(base);

    for (let i = 0; i < value.length; i++) {
        const char = value[i].toLowerCase();
        const digitValue = BigInt(digits.indexOf(char));
        result = result * bigBase + digitValue;
    }
    return result;
}

function findConstantTerm(jsonString) {
    const data = JSON.parse(jsonString);
    const k = data.keys.k;

    const points = [];
    let pointsAdded = 0;
    for (const key in data) {
        if (key !== "keys" && pointsAdded < k) {
            const x = BigInt(key);
            const y = parseBigInt(data[key].value, parseInt(data[key].base, 10));
            points.push({ x, y });
            pointsAdded++;
        }
    }

    let constantTermC = 0n;

    for (let j = 0; j < k; j++) {
        let numerator = 1n;
        let denominator = 1n;

        for (let i = 0; i < k; i++) {
            if (i === j) {
                continue;
            }
            numerator *= -points[i].x;
            denominator *= (points[j].x - points[i].x);
        }
        
        const term = points[j].y * numerator / denominator;
        constantTermC += term;
    }

    return constantTermC;
}

const testCase1 = `{
    "keys": { "n": 4, "k": 3 },
    "1": { "base": "10", "value": "4" },
    "2": { "base": "2", "value": "111" },
    "3": { "base": "10", "value": "12" },
    "6": { "base": "4", "value": "213" }
}`;

const testCase2 = `{
    "keys": { "n": 10, "k": 7 },
    "1": { "base": "6", "value": "13444211440455345511" },
    "2": { "base": "15", "value": "aed7015a346d635" },
    "3": { "base": "15", "value": "6aeeb69631c227c" },
    "4": { "base": "16", "value": "e1b5e05623d881f" },
    "5": { "base": "8", "value": "316034514573652620673" },
    "6": { "base": "3", "value": "2122212201122002221120200210011020220200" },
    "7": { "base": "3", "value": "20120221122211000100210021102001201112121" }
}`;

console.log("--- Running Test Case 1 ---");
const constant_c1 = findConstantTerm(testCase1);
console.log("The constant term 'c' is:", constant_c1.toString()); 

console.log("\n--- Running Test Case 2 ---");
const constant_c2 = findConstantTerm(testCase2);
console.log("The constant term 'c' is:", constant_c2.toString());