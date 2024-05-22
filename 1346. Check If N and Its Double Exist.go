func checkIfExist(arr []int) bool {
     n := len(arr)
    for i := 0; i < n; i++ {
        for j := i + 1; j < n; j++ {
            if arr[i]*2 == arr[j] || arr[j]*2 == arr[i] {return true}
        }
    }
    return false
}
