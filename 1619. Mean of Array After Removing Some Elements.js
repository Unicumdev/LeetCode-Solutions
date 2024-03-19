arr.sort()
    percentile = int(len(arr) * 0.05)
    total_sum = 0
    
    for i in range(percentile, len(arr) - percentile):
        total_sum += arr[i]
    
    return total_sum / (len(arr) - (percentile * 2))
