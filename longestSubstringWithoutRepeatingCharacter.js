/*

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


*/


var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let tempArr = [];
    
    if(s.length === 1) return 1;
    if(s.length === 0) return 0;
    
    while(right < s.length){
        if(!tempArr.includes(s[right])){
            tempArr.push(s[right]);
            maxLength = Math.max(maxLength, tempArr.length);
            right++;
        }
        else{
            tempArr = [];
            left++
            right = left
        }
    }
    return maxLength
};