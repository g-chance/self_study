

#   ==================== any() and all() built-ins ====================

# iterators = [5,5]
# while all(i > 0 for i in iterators):
#     print('all while loop', iterators)
#     iterators[0] -= 1
# iterators = [5,5]
# while any(i > 0 for i in iterators):
#     print('any while loop', iterators)
#     iterators[0] -= 1
#     iterators[1] -= 2
# print(i > 0 for i in [5,5])
# print(any(i>0 for i in [0,0]))
# print(all([5==5,5==6]))
# print(any([5==5,5==6]))
# print([5==5, 5==6])
# print(all([5, 6, 7]))
# print(all([0, 0, 0]))


#   ==================== Dynamic Programming / Memoization ====================

# calcs = [0]
# cache = {}
# def fib(n):
#     calcs[0] += 1
#     if n in cache:
#         return cache[n]
#     if n < 2:
#         cache[n] = n
#         return n
#     cache[n] = fib(n-1) + fib(n-2)
#     return cache[n]

# print(fib(30))
# print(calcs)


#   ==================== Graphs + BFS/DFS ====================

# from collections import deque

# # Implemented as Adjacency List
# class Graph:
#     def __init__(self):
#         self.numberOfNodes = 0
#         self.adjacencyList = {}
    
#     def addVertex(self, node):
#         self.adjacencyList[node] = []
#         self.numberOfNodes += 1
#         return self
    
#     def addEdge(self, node1, node2):
#         # Undirected
#         self.adjacencyList[node1].append(node2)
#         self.adjacencyList[node2].append(node1)
#         return self
    
#     def breadthFirstSearch(self, ver):
#         visited = {key: False for key in self.adjacencyList}
#         ans, queue = [], deque([ver])
#         visited[ver] = True
#         while queue:
#             ver = queue.popleft()
#             ans.append(ver)
#             for neighbor in self.adjacencyList[ver]:
#                 if visited[neighbor] == False:
#                     queue.append(neighbor)
#                     visited[neighbor] = True
#         return ans
    
#     def depthFirstSearch(self, ver):
#         visited = {key: False for key in self.adjacencyList}
#         ans = []
#         visited[ver] = True

#         def goDeeper(ver):
#             for neighbor in self.adjacencyList[ver]:
#                 if visited[neighbor] == False:
#                     visited[neighbor] = True
#                     goDeeper(neighbor)
#             ans.append(ver)
        
#         goDeeper(ver)
#         return ans
    
#     def showConnections(self):
#         return self

# myGraph = Graph()
# myGraph.addVertex(0)
# myGraph.addVertex(1)
# myGraph.addVertex(2)
# myGraph.addVertex(3)
# myGraph.addEdge(0, 1) 
# myGraph.addEdge(0, 2) 
# myGraph.addEdge(1, 2) 
# myGraph.addEdge(2, 3) 


# print(myGraph.adjacencyList)
# print(myGraph.breadthFirstSearch(next(iter(myGraph.adjacencyList))))
# print(myGraph.depthFirstSearch(next(iter(myGraph.adjacencyList))))


#   ==================== Recursion ====================

# def factorial(num):
#     if num == 1:
#         return num
#     return factorial(num - 1) * num

# print(factorial(5))

# def func(num):
#     num -= 1
#     if num == 0:
#         return [0]
#     res = []
#     for i in range (1,num,2):
#         for j in func(i):
#             print('in func loop', "j", j)
#             # for k in func(num - i):
#             root = [1]
#             root += [['left', j]]
#             res += root
#     return res

# print(func(5))


#   ==================== Collections - Counter module ====================

# from collections import Counter

# c = Counter({'f':1, 'e':6})
# print(c)
# d = Counter('fleeeeeeeeergh')
# c.update(['g','w','w'])
# print(c - d)
# print(c)


# lis = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 88]
# i, p = 0, len(lis)-1
# while p > i:
#     if lis[i] > lis[p]:
#         lis[i], lis[p], lis[p-1] = lis[p-1], lis[i], lis[p]
#         p -= 1
#     else:
#         i += 1
# print(lis)


#   ==================== Heap Practice ====================

    #   =============== heapq module ===============
# import heapq as h

# k = 2
# lis = [2,5,4,7,8,9,3,4]
# h.heapify(lis)

# print(lis)

# for i in range(k-1):
#     h.heappop(lis)

# print(lis[0])

    #   =============== Attempt at implementing my own max-heap ===============

# class MinHeap:
#     def __init__(self):
#         self.lis = [0]
#         self.size = 0

#     def insertVal(self, val):
#         self.lis.append(val)
#         self.size += 1
#         self.percUp(self.size)
    
#     def percUp(self, i):
#         while i // 2 > 0 and self.lis[i] < self.lis[i // 2]:
#             self.lis[i], self.lis[i // 2] = self.lis[i // 2], self.lis[i]
#             i //= 2

#     def percDown(self, i):
#         return

#     def findVal(self, val):
#         return 0

#     def delVal(self, val):
#         i = self.findVal(val)
#         self.lis[i] = self.lis.pop()
#         if i * 2 < self.size and self.lis[i] > self.lis[i * 2]:
#             self.percDown(i)
#         elif i * 2 + 1 < self.size and self.lis[i] > self.lis[i * 2 + 1]:
#             self.percDown(i)
#         elif i // 2 > 0 and self.lis[i] < self.lis[i // 2]:
#             self.percUp(i)


#   ==================== Sorting Practice ====================

    #   =============== Quick Sort ===============
        # Holy shitnit I did it!

# def quickSort(lis, piv):

#     if len(lis) == 1:
#         return lis

#     def pivot(lis, p):
#         i = 0
#         while p > i:
#             if lis[i] > lis[p]:
#                 lis[i], lis[p], lis[p-1] = lis[p-1], lis[i], lis[p]
#                 p -= 1
#             else:
#                 i += 1
#         if i == 0:
#             return lis[:i+1], lis[i+1:]
#         return lis[:i], lis[i:]

#     lf, rt = pivot(lis, piv)
#     print("lf", lf, "rt", rt)
    
#     left = quickSort(lf, len(lf)-1)
#     right = quickSort(rt, len(rt)-1)

#     return left + right

# nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
# print(quickSort(nums, len(nums)-1))

    #   =============== Merge Sort ===============

# def mergeSort(lis):
#     if len(lis) == 1:
#         return lis

#     left = lis[:len(lis) // 2]
#     right = lis[len(lis) // 2:]

#     def merge(left, right):
#         lf_i, rt_i, comb = 0, 0, []
#         while lf_i < len(left) and rt_i < len(right):
#             if left[lf_i] < right[rt_i]:
#                 comb += [left[lf_i]]
#                 lf_i += 1
#             else:
#                 comb += [right[rt_i]]
#                 rt_i += 1
#         comb += right[rt_i:] if lf_i == len(left) else left[lf_i:]
#         return comb

#     return merge(mergeSort(left), mergeSort(right)) 

# print(mergeSort([2,5,4,1,7,3,4,2]))


    #   =============== Insertion Sort ===============

# def insertionSort(lis):
#     for i in range(len(lis)-1):
#         if lis[i] > lis[i+1]:
#             temp = lis[i+1]
#             for j in range(i+1, -1, -1):
#                 if lis[j-1] > temp and j-1 > -1:
#                     lis[j] = lis[j-1]
#                 else:
#                     lis[j] = temp
#                     break

# insertionSort([85,12,59,45,72,51])


#   ==================== RegEx Practice ====================

# import re

# x = re.compile(r'[a-zA-Z_]+@[\w]+.[\w]+')
# y = x.match('farts@flernch.com')
# print(y)


#   ==================== Mutibility and Immutibility ====================

# lis = [1,2,3]
# dic = {1:'A', 2:'B', 3:'C'}
# se = {'A', 'B', 'C'}
# tup = (5, "Hello", [1,2,3], dic)
# num = 5
# st = "Hello"
# boo = True
# fset = frozenset({1, 2, 3})

# def testFunc(lis, dic, se, tup, num, st, boo, fset):
#     # lis[0] = 4
#     # dic[1] = 'D'
#     se -= {'A'}
#     # print(f"def lis ({id(lis)}):",lis)
#     # print(f"def dic ({id(dic)}):", dic)
#     print(f"def se ({id(se)}):", se)
#     tup[2].append(456)
#     num += 6
#     st += ', Worldo'
#     boo = False
#     fset -= {1}
#     print(f"def tup ({id(tup)}):", tup)
#     print(f"def num ({id(num)}):", num)
#     print(f"def st ({id(st)}):", st)
#     print(f"def boo ({id(boo)}):", boo)
#     print(f"def fset ({id(fset)}):", fset)
#     return

# testFunc(lis, dic, se, tup, num, st, boo, fset)

# # print(f"outside lis ({id(lis)}):",lis)
# # print(f"outside dic ({id(dic)}):", dic)
# print(f"outside se ({id(se)}):", se)
# num += 7
# st += ', Worldd'
# print(f"outside tup ({id(tup)}):", tup)
# print(f"outside num ({id(num)}):", num)
# print(f"outside st ({id(st)}):", st)
# print(f"outside boo ({id(boo)}):", boo)
# print(f"outside fset ({id(fset)}):", fset)


#   ==================== Classes + Inheritance Practice ====================

# class Stacker:
#     def __init__(self):
#         self.stacker = []
#         self.index = -1
    
#     def addSomeShit(self, val):
#         self.stacker.append(val)
#         return self

#     def __iter__(self):
#         return self
    
#     def __next__(self):
#         if self.index == len(self.stacker)-1:
#             raise StopIteration
#         self.index = self.index + 1
#         return self.stacker[self.index]



# class TestMe(Stacker):
#     def __init__(self):
#         super().__init__()

#     def addSomeShit(self, val):
#         super().addSomeShit(val)
#         return self.stacker

# tester = TestMe()

# tester.addSomeShit(99)
# tester.addSomeShit(84)
# tester.addSomeShit(47)

# print("tester", tester.stacker)
# print("tester", tester)

# poops = Stacker()

# poops.addSomeShit(5)
# poops.addSomeShit(7)
# poops.addSomeShit(9)

# print("poops", poops.stacker)

# buttiter = iter(poops)

# for val in buttiter:
#     print("forloop", val)

# print(buttiter)
# print(buttiter.__next__())
# print(buttiter.__next__())
# print(buttiter.__next__())
# print(buttiter.__next__())


#   ==================== Exception Handling Practice ====================

# try:
#     butts
#     print(butts)
# except NameError as poops:
#     print("NameError:", poops)
#     print("eat my farts")
#     raise
# finally:
#     print("eat more of my farts")

# x = 1
# if x < 2:
#     raise Exception(f"eat all the farts, don't go over {x}")
# butts
# print(butts)


#   ==================== Strings ====================

# word = "Python"
# print(word.lower())