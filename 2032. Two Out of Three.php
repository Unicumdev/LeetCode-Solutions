class Solution {
    function twoOutOfThree($nums1, $nums2, $nums3) {
    $arr1 = array_filter($nums1, function($e) use ($nums2) {return in_array($e, $nums2);});
    $arr2 = array_filter($nums2, function($e) use ($nums3) {return in_array($e, $nums3);});
    $arr3 = array_filter($nums3, function($e) use ($nums1) {return in_array($e, $nums1);});
    return array_values(array_unique(array_merge($arr1, $arr2, $arr3)));
    }
}
