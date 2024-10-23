function TwoSum(nums, target){

    //
    for(let i = 0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+ nums[j] === target){
                return [i, j]
            }
        }
    }
}


const result = TwoSum([3,4,5,6], 10)

console.log(result)
