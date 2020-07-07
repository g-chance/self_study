#   ==================== Counting Derangements ====================

# Given a set {1,2,3,4}, count the number of derangements

    # Bottom-up
# Better
n = 6
tab = [0,1]
ans = 0
for i in range(3, n+1):
    ans = (i-1) * (tab[0] + tab[1])
    tab[0], tab[1] = tab[1], ans
    print(tab)
print(ans)

# Good
n = 5
tab = [-1]*(n+1)
tab[1], tab[2] = 0, 1 
for i in range(3, n+1):
    tab[i] = (i-1) * (tab[i-1] + tab[i-2])
    print(tab)
print(tab[-1])

    # Top-down -- memoization
count = [0]
memo = {}

def countDerangements(n):
    count[0] += 1
    if n in memo:
        return memo[n]
    if n == 1:
        return 0
    if n == 2:
        return 1
    # return (n - 1) * (countDerangements(n - 1) + countDerangements(n - 2))
    memo[n] = (n - 1) * (countDerangements(n - 1) + countDerangements(n - 2))
    return memo[n]

print(countDerangements(30), 'count', count)