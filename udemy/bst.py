class Node:
    def __init__(self, value):
        self.left = None
        self.right = None
        self.value = value

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        new_node = Node(value)
        if self.root == None:
            self.root = new_node
            return self
        runner = self.root
        while runner:
            if value > runner.value:
                if runner.right == None:
                    runner.right = new_node
                    return self
                runner = runner.right
            elif runner.left == None:
                runner.left = new_node
                return self
            else:
                runner = runner.left

    def lookup(self,value):
        runner = self.root
        while runner != None:
            if runner.value == value:
                return runner
            if value > runner.value:
                runner = runner.right
            else:
                runner = runner.left
        return None
    
    def remove(self, value):
        if self.root.value == value:
            self.root = None
            return self
        runner = self.root
        while runner:
            ref = runner
            if value > runner.value:
                if runner.right.value == value:
                    runner = runner.right
                    ref.right = runner.right
                    finder = runner.right
                    while finder.left != None:
                        finder = finder.left
                    finder.left = runner.left
                    return self
                else:
                    runner = runner.right
            elif runner.left.value == value:
                runner = runner.left
                ref.left = runner.left
                finder = runner.left
                while finder.right != None:
                    finder = finder.right
                finder.right = runner.right
                return self
            else:
                runner = runner.left
        return self

tree = BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.insert(169)
tree.insert(171)

print(tree)
finder = tree.root
print(finder.value)
print(finder.left.value)
print(finder.left.left.value)
print(finder.left.right.value)
print(finder.right.value)
print(finder.right.left.value)
print(finder.right.right.value)

print(tree.lookup(170).right)
gawl = tree.lookup(4)

print(tree.remove(20))

print(finder.value)
print(finder.right.value)
print(finder.right.right.value)
print(finder.right.left.value)
# print(finder.right.right.right.value)
# print(finder.right.right.left.value)
print(finder.right.left.left.value)