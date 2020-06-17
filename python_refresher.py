#   ==================== Heap Practice ====================

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

def mergeSort(lis):
    if len(lis) == 1:
        # print("return", lis)
        return lis

    left = lis[:len(lis) // 2]
    right = lis[len(lis) // 2:]

    def merge(lf, rt):
        i, comb = 0, []
        # print("in merge", lf, rt)
        while i < len(lf):
            for j in range(len(rt)):
                if lf[i] < rt[j]:
                    comb += [lf[i]]
                    if i == len(lf)-1:
                        comb += rt[j:]
                    i += 1
                    break
                else:
                    comb += [rt[j]]
                    if j == len(rt)-1:
                        comb += lf[i:]
                        i = len(lf)
        return comb
    # print("before return", left, right)
    print(mergeSort(left), mergeSort(right))
    return merge(mergeSort(left), mergeSort(right)) 
    # print("after return", left, right)

print(mergeSort([2,5,4,1,7,3,4,2]))

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