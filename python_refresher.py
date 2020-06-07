#   ==================== Mutibility and Immutibility ====================

lis = [1,2,3]
dic = {1:'A', 2:'B', 3:'C'}
se = {'A', 'B', 'C'}
tup = (5, "Hello", [1,2,3], dic)
num = 5
st = "Hello"
boo = True
fset = frozenset({1, 2, 3})

def testFunc(lis, dic, se, tup, num, st, boo, fset):
    # lis[0] = 4
    # dic[1] = 'D'
    se -= {'A'}
    # print(f"def lis ({id(lis)}):",lis)
    # print(f"def dic ({id(dic)}):", dic)
    print(f"def se ({id(se)}):", se)
    tup[2].append(456)
    num += 6
    st += ', Worldo'
    boo = False
    fset -= {1}
    print(f"def tup ({id(tup)}):", tup)
    print(f"def num ({id(num)}):", num)
    print(f"def st ({id(st)}):", st)
    print(f"def boo ({id(boo)}):", boo)
    print(f"def fset ({id(fset)}):", fset)
    return

testFunc(lis, dic, se, tup, num, st, boo, fset)

# print(f"outside lis ({id(lis)}):",lis)
# print(f"outside dic ({id(dic)}):", dic)
print(f"outside se ({id(se)}):", se)
num += 7
st += ', Worldd'
print(f"outside tup ({id(tup)}):", tup)
print(f"outside num ({id(num)}):", num)
print(f"outside st ({id(st)}):", st)
print(f"outside boo ({id(boo)}):", boo)
print(f"outside fset ({id(fset)}):", fset)


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