from collections import deque

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

    def lookup(self, value):
        runner = self.root
        while runner != None:
            if value == runner.value:
                return runner
            if value > runner.value:
                runner = runner.right
            else:
                runner = runner.left
        return None
    
    def breadthFirstSearchIterative(self):
        runner = self.root
        ans, queue = [], deque()
        
        queue.append(runner)

        while queue:
            node = queue.popleft()
            if node:
                ans.append(node.value)
                queue += [node.left, node.right]
        return ans
    
    def breadthFirstSearchRecursive(self, queue, ans):
        if not queue:
            return ans
        
        node = queue.popleft()
        if node:
            ans.append(node.value)
            queue += [node.left, node.right]
        return self.breadthFirstSearchRecursive(queue, ans)

    
    # def remove(self, value):

    # All sorts of wrong -- try again
        # runner = self.root
        # while runner:
        #     parent = runner
        #     if value > runner.value:
        #         runner = runner.right
        #         if runner.value == value:
        #             finder = runner.right
        #             temp = None
        #             while finder.left != None:
        #                 temp = finder
        #                 finder = finder.left
        #             parent.right = finder
        #             finder.left = runner.left
        #             if temp:
        #                 temp.left = finder.right
        #                 finder.right = runner.right
        #             return self
        #     else:
        #         runner = runner.left
        #         if runner.value == value:
        #             finder = runner.left
        #             temp = None
        #             while finder.right != None:
        #                 temp = finder
        #                 finder = finder.right
        #             parent.left = finder
        #             finder.right = runner.right
        #             if temp:
        #                 temp.right = finder.left
        #                 finder.left = runner.left
        #             return self
        # return None

tree = BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

print(tree)

finder = tree.root
print(finder.value)
print(finder.left.value)
print(finder.left.left.value)
print(finder.left.right.value)
print(finder.right.value)
print(finder.right.left.value)
print(finder.right.right.value)

print(tree.lookup(4))

print(tree.breadthFirstSearchIterative())
print(tree.breadthFirstSearchRecursive(deque([tree.root]), []))