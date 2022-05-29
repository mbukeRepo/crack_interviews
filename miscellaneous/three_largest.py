#!/usr/bin/python3


def find_three_largest(array):
    three_largest = [None, None, None]
    for num in array:
        update_three_largest(three_largest, num)

    return three_largest

def update_three_largest(array, num):
    if array[2] is None or array[2] < num:
        shift_and_update(array, num, 2)
    elif array[1] is None or array[1] < num:
        shift_and_update(array, num, 1)
    elif array[0] is None or array[0] < num:
        shift_and_update(array, num, 0)

def shift_and_update(array, num, idx):
    for i in range(idx+1):
        if i == idx:
            array[i] = num
        else:
            array[i] = array[i + 1]


if __name__ == "__main__":
    test = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7]
    print(find_three_largest(test));
