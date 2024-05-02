class Solution(object):
    def allCellsDistOrder(self, rows, cols, rCenter, cCenter):
        ans = []
        for i in range(rows):
            for j in range(cols):
                ans.append([i, j])
        ans.sort(key=lambda x: abs(rCenter - x[0]) + abs(cCenter - x[1]))
        return ans
        
