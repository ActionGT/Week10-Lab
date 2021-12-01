



function calc() {


    const nums = [20, 20, 30, 30];
    let sum = 0;

    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    document.getElementById("sum").innerHTML += "The sum of the array is:" + sum;
    document.getElementById("mean").innerHTML += "The mean of the array is:" + (sum / nums.length);
    //console.log("The sum of the array is:",sum);
    //console.log("The mean of the array is:",sum/nums.length);

}
