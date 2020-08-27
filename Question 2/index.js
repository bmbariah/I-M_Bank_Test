/* 
    Knapsack Problem

    Brute Force Method
    Time Complexity of O(2^n)
*/


function knapsackSolution(values, weights, limit, i) {

    if (limit === 0 || i === 0) {
        return 0;
    }
    if (weights[i] > limit){
        return knapsackSolution(values, weights, limit, i - 1);
    }
    else {
        let include = values[i] + knapsackSolution(values, weights, limit - weights[i], i - 1);
        let exclude = knapsackSolution(values, weights, limit, i - 1);
        return Math.max(include, exclude);
    }
        
}

// [{ "weight": 5, "value": 10 }, { "weight": 4, "value": 40 }, { "weight": 6, "value": 30 }, { "weight": 4, "value": 50 }]

let itemWeights = [null, 5, 4, 6, 4],
    itemValues = [null, 10, 40, 30, 50],
    knapsackLimit = 10,
    No_Of_Items = 4;

let maxLoot = knapsackSolution(itemValues,
    itemWeights,
    knapsackLimit,
    No_Of_Items);

console.log('Maximum Loot is : ', maxLoot);
//Maximum Loot is :  90