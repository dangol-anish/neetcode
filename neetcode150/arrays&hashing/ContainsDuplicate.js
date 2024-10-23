
    /*
    Q. Why did I use Set instead of a normal Array?
    A. The includes() method of array has a TC of O(N) which makes this program a O(N^2) whereas the has method in Set has a TC of O(1) making this program a TC of O(N).

    Basic Algorithm:
    1. Loop all the elements of original array
    2. For each element, check if the element exits in the array you create,
        if it does, return true
        else add the element in your array
    3. after the completion of loop, return false to signify it contains no duplicate
    */

    // Contains Duplicate
    function hasDuplicate(nums) {
        let duplicateChecker = new Set();


        for(let i=0 ; i< nums.length; i++){
            if(duplicateChecker.has(nums[i])){
                return true;
            }else{
                duplicateChecker.add(nums[i]);

            }
        }

        return false;
    }


    console.log(hasDuplicate([1, 2, 3, 3]));
