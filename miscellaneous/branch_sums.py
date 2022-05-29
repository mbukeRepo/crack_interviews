#!/usr/bin/python3

"""
  Time O(n) => n number of nodes
  Space O(log(n))  , worst-case O(n) => skewed tree
"""

class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value

def helper(root, current_sum, branch_sums):
    if root is None:
        return
    new_sum = current_sum + root.value
    if root.left is None and root.right is None:
        branch_sums.append(new_sum)
        return
    helper(root.left, new_sum, branch_sums)
    helper(root.right, new_sum, branch_sums)

def branch_sums(root):
    sums = []
    helper(root, 0, sums)

    return sums


if __name__ == "__main__":
    root = Node(1)
    n1 = Node(2)
    n2 = Node(3)
    n3 = Node(4)
    n4 = Node(5)
    n5 = Node(6)
    n6 = Node(7)
    n7 = Node(8)
    n8 = Node(9)
    n9 = Node(10)

    root.left = n1
    root.right = n2
    n1.left = n3
    n1.right = n4
    n2.left = n5
    n2.right = n6
    n3.left = n7
    n3.right = n8
    n4.left = n9
    print(branch_sums(root))
