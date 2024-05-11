class Solution(object):
    def longestCommonPrefix(self, strs):
        if len(strs) == 0:
            return ""
        prefix = strs[0]
        for word in strs:
            while word.find(prefix) != 0:
                prefix = prefix[:-1]
                if prefix == '':
                    return ''
        return prefix
        
