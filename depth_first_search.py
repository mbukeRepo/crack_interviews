#!/usr/bin/python3

""" 
    Depth first search implementation
    time complexity O(v + e) where v is number of vertices and e is the 
    number of edges
    space complexity O(v) [because of recursion and growing array]
"""

class Node():
    def __init__(self, name):
        self.name = name;
        self.children = []

    def add_child(self, node):
        self.children.append(node)

    def depth_first_search(self, array):
        array.append(self.name)
        for node in self.children:
            node.depth_first_search(array)

        return array

if __name__ == "__main__":
    root = Node('A')
    B = Node('B')
    B.add_child(Node('E'))
    B.add_child(Node('F'))
    C = Node('C')
    C.add_child(Node('G'))
    D = Node('D')
    root.add_child(B)
    root.add_child(C)
    root.add_child(D)

    print(root.depth_first_search([]))
    
