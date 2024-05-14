class Solution(object):
    def groupAnagrams(self, strs):
        maps = {}
        for str in strs:
            s = ''.join(sorted(str))
            if s in maps:
                maps[s].append(str)
            else:
                maps[s] = [str]
        return list(maps.values())
        
