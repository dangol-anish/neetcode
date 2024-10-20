
    function hasDuplicate(nums) {
        let duplicateChecker = [];


        for(let i=0 ; i< nums.length; i++){
            if(duplicateChecker.includes(nums[i])){
                return true;
            }else{
                duplicateChecker.push(nums[i]);

            }
        }

        return false;
    }


    console.log(hasDuplicate([1, 2, 3, 3]));
