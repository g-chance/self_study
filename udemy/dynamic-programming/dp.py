#   ==================== Max Sub Array ====================

myArr = [5, -4, 8, -10, -2, 4, -3, 2, 7, -8, 3, -5, 3]

ma = 0
su = 0

for i in range(len(myArr)):
    su += myArr[i]
    ma = max(ma, su)
    if su < 0:
        su = 0
print(ma)

#   ==================== Aircraft Spacing ====================

#     # Bottom up
# # Best? (albeit I'm not sure if this is more or less confusing than the below)
# aircraft = [155, 55, 2, 96, 67, 203, 3]

# for i in range(len(aircraft)):
#     aircraft[i] = max((aircraft[i - 2] if i - 2 >= 0 else 0) + aircraft[i], 
#                     aircraft[i - 1] if i - 1 >= 0 else 0)
#     print(aircraft)

# # Great
# aircraft = [155, 55, 2, 96, 67, 203, 3]
# ans = [0, 0, 0]

# for i in range(len(aircraft)):
#     ans[2] = max(ans[0] + aircraft[i], ans[1])
#     ans[0], ans[1] = ans[1], ans[2]

# print(ans[2])

#     # Top Down
# count = [0]
# aircraft = [155, 55, 2, 96, 67, 203, 3]
# memo = {}

# def maxLanded(n):
#     count[0] += 1
#     if n in memo:
#         return memo[n]
#     if n < 0:
#         return 0
#     # return max(maxLanded(n - 2) + aircraft[n], maxLanded(n - 1))
#     memo[n] = max(maxLanded(n - 2) + aircraft[n], maxLanded(n - 1))
#     return memo[n]

# print(maxLanded(len(aircraft)-1), count)


#   ==================== Counting Derangements ====================

# # Given a set {1,2,3,4}, count the number of derangements

#     # Bottom-up
# # Better
# n = 6
# tab = [0,1]
# ans = 0
# for i in range(3, n+1):
#     ans = (i-1) * (tab[0] + tab[1])
#     tab[0], tab[1] = tab[1], ans
#     print(tab)
# print(ans)

# # Good
# n = 5
# tab = [-1]*(n+1)
# tab[1], tab[2] = 0, 1 
# for i in range(3, n+1):
#     tab[i] = (i-1) * (tab[i-1] + tab[i-2])
#     print(tab)
# print(tab[-1])

#     # Top-down -- memoization
# count = [0]
# memo = {}

# def countDerangements(n):
#     count[0] += 1
#     if n in memo:
#         return memo[n]
#     if n == 1:
#         return 0
#     if n == 2:
#         return 1
#     # return (n - 1) * (countDerangements(n - 1) + countDerangements(n - 2))
#     memo[n] = (n - 1) * (countDerangements(n - 1) + countDerangements(n - 2))
#     return memo[n]

# print(countDerangements(30), 'count', count)