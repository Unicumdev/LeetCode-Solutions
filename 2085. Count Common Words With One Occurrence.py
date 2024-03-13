class Solution(object):
    def countWords(self, words1, words2):
        map1 = {}
        map2 = {}
        for word in words1:
            map1[word] = map1.get(word, 0) + 1
        for word in words2:
            map2[word] = map2.get(word, 0) + 1
        ans = 0
        for key, value in map1.items():
            if value == 1 and map2.get(key, 0) == 1:
                ans += 1
        return ans
        
