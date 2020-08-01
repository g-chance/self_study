#   ==================== Text Justification ====================

class UghHereWeGo:
    def __init__(self, text, line_length):
        self.text = text
        self.line_length = line_length

    def getUglyNum(self, fr, to):
        text_len = 0
        for i in range(fr, to):
            text_len += len(self.text[i])
            if i != to-1:
                text_len += 1
        if text_len <= self.line_length:
            return (self.line_length - text_len) ** 2
        return 2**32
    
    def justifyText(self):
        # if i == len(self.text):
        #     return 0
        # testing = 2**32
        # for x in range(i + 1, len(self.text) + 1):
        #     # for j in range(x+1, len(self.text) + 1):
        #     print('x', x)
        #     temp = self.getUglyNum(i, x)
        #     temp += self.findUglyNum(x)
        #     testing = min(testing, temp)
        # print(testing)
        # return testing

        scores = [0]*(len(self.text) + 1)
        pointers = [0]*(len(self.text) + 1)
        print(scores)
        for i in range(len(self.text)-1,-1,-1):
            temp = 2**32
            for j in range(i+1, len(self.text)+1):
                temp2 = self.getUglyNum(i, j) + scores[j]
                if temp2 < temp:
                    # temp = temp2 + scores[j]
                    scores[i] = temp2
                    pointers[i] = j
        print(scores)
        print(pointers)

        i = 0
        ans = ''
        while i < len(self.text):
            ans += ' '.join(self.text[i:pointers[i]]) + '\n'
            i = pointers[i]
        return ans

justify = UghHereWeGo('The cat jumped over the fence'.split(), 10)

print(justify.justifyText())

#   ==================== Max Sub Array ====================

# myArr = [5, -4, 8, -10, -2, 4, -3, 2, 7, -8, 3, -5, 3]

# ma = 0
# su = 0

# for i in range(len(myArr)):
#     su += myArr[i]
#     ma = max(ma, su)
#     if su < 0:
#         su = 0
# print(ma)

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