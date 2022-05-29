def two_number_sum(array, target):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        currentSum =  array[left] + array[right]
        if currentSum == target:
            return [array[left], array[right]]
        elif currentSum < target:
            left += 1
        elif currentSum > target:
            right -= 1
    return []
