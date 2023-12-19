# amocana 1
# Write a function findNeedle() that takes an array full of junk but containing one "needle"
# After your function finds the needle it should return a message (as a string) that says:
# "found the needle at position " plus the index it found the needle, so:


# def find_needle(haystack):
#    return f'found the needle at position {haystack.index("needle")}'

# davaleba 2
# Write a function which converts the input string to uppercase.

# def make_upper_case(s):
#     return s.upper()



# davaleba 3
# Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer.
# If the array does not contain any numbers then you should return 0.



# def sum_array(a):
#     x = 0
#     for i in a:
#         x += i
#     return(x)




# davaleba 4
# Create a function which answers the question "Are you playing banjo?".
# If your name starts with the letter "R" or lower case "r", you are playing banjo!
# The function takes a name as its only argument, and returns one of the following strings:



# def are_you_playing_banjo(name):
#     words = name.split()
#     first_letter = words[0][0]
#     if first_letter == "r" or first_letter == "R":
#         return (f'{name} ' +  'plays banjo')
#     else:
#         return (f'{name} ' +  'does not play banjo')



# davaleba 5
# Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


# def invert(lst):
#     minus = []
#
#     for i in lst:
#         if i > 0:
#             minus.append(-i)
#         elif i < 0:
#             minus.append(-i)
#         else:
#             minus.append(0)
#     return minus




# davaleba 6
# Write a function which calculates the average of the numbers in a given list.
# Note: Empty arrays should return 0.
#
#
#
# def find_average(numbers):
#     if len(numbers) > 0:
#         total_sum = 0
#         for i in numbers:
#             total_sum += i
#         average = total_sum / (len(numbers))
#         return average
#     else:
#         return 0


