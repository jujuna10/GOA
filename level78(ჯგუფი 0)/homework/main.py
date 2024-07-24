# 1. Merge Lists: Write a function to merge two lists into a single list without any duplicates. For example, merging [1, 2, 3] and
# [3, 4, 5] should result in [1, 2, 3, 4, 5].

# def no_duplicate(x,y):
#     new = []
#     for i in x:
#         new.append(i)
#     for j in y:
#         if j in x:
#             continue
#         else:
#             new.append(j)
#     print(new)
#
# no_duplicate([1,2,3],[3,4,5])

# 2. List Comprehension: Create a list comprehension that squares each element of a given list. For instance, if the input list is
# [1, 2, 3, 4, 5], the output should be [1, 4, 9, 16, 25].

# def squares(x):
#     new = []
#     for i in x:
#         new.append(i ** 2)
#     print(new)
#
# squares([1,2,3,4,5])
# 3. Filter Odd Numbers: Write a function that takes a list of integers as input and returns a new list containing only the
# odd numbers from the original list.

# def squares(x):
#     new = []
#     for i in x:
#         if i % 2 == 1:
#             new.append(i)
#     print(new)
#
# squares([1,2,3,4,5])

# 4. Find Common Elements: Implement a function that takes two lists as input and returns a list containing the common
# elements between them

#
# def squares(x,y):
#     new = []
#     for i in x:
#         if i in y:
#             new.append(i)
#     print(new)
#
# squares([1,2],[1,2,3,4])

# 5. List Manipulation: Write a function to remove the duplicates from a given list while preserving the original order
#  of elements. For example, if the input list is [1, 2, 3, 2, 4, 1], the output should be [1, 2, 3, 4]
#
# def squares(x):
#     for i in x:
#         count = x.count(i)
#         if count > 1:
#             x.pop(i)
#     print(x)
#
# squares([1,2,1,2,3,4])

# 6. Merge Dictionaries: Write a function to merge two dictionaries into a single dictionary. If there are overlapping
# keys, prioritize the values from the second dictionary. For example, merging {'a': 1, 'b': 2} and {'b': 3, 'c': 4} should result in {'a': 1, 'b': 3, 'c': 4}


# dic1 = {
#     "a":1,
#     "b":2
# }
#
# dic2 = {
#     "b":3,
#     "c":4,
# }
# def dict(x,y):
#     print(x | y)
#
# dict(dic1,dic2)


# 7. Dictionary Comprehension: Create a dictionary comprehension that squares each value of a given dictionary. For
# instance, if the input dictionary is {'a': 1, 'b': 2, 'c': 3}, the output should be {'a': 1, 'b': 4, 'c': 9}

# dic1 = {
#     "a":1,
#     "b":2
# }
#
#
# def dict(x):
#     dupl = {}
#     for key, value in x.items():
#         dupl[key] = value ** 2
#
#     print(dupl)
#
#
# dict(dic1)

# 8. Dictionary Keys to List: Write a function that extracts all keys from a dictionary and returns them as a list.
# For example, if the input dictionary is {'a': 1, 'b': 2, 'c': 3}, the output should be ['a', 'b', 'c']


# dic1 = {
#     "a":1,
#     "b":2
# }
#
# def dict(x):
#     new = []
#     for keys,value in x.items():
#         new.append(keys)
#     print(new)
# dict(dic1)


# 11. Factorial Function: Write a function to compute the factorial of a non-negative integer. The factorial of a number n is the
# product of all positive integers less than or equal to n.

# def factorial(x):
#     print(x * factorial(x - 1))
# factorial(5)
#
# 12. Palindrome Checker: Implement a function to check if a given string is a palindrome. A palindrome is a word, phrase, number, or
# other sequence of characters that reads the same forward and backward.

# def palindrome(x):
#     if x == x[::-1]:
#         print("this is palindrome")
#     else:
#         print("this is not palindrome")
# palindrome("aba")
#
# 13. Anagram Checker: Create a function that takes two strings as input and returns True if they are anagrams (contain the same letters
# with the same frequency) and False otherwise.

# def anagram(x,y):
#     x_d = x.lower()
#     y_d = y.lower()
#     if sorted(x_d) == sorted(y_d):
#         print("this is anagram")
#     else:
#         print("this is not anagram")
# anagram("azsx","sxaz")
#
#
# 15. Simple To-Do List: Implement a function that allows users to add, remove, and view items in a to-do list. It is better to use lists
# or dicts for this task.

# def to_do_list():
#     todolist = []
#     user = input("add or remove?")
#     if user == "add":
#         user_input = input("add items")
#         todolist.append(user_input)
#     elif user == "remove":
#         user_input_remove = input("remove items")
#         if user_input_remove in todolist:
#             todolist.remove(user_input_remove)
#         else:
#             print("this item is not in to do list")
#     print(todolist)
# to_do_list()






# 16. Combining Lists into Dictionary: Create a function that takes two lists, one for keys and one for values, and returns a dictionary
# # where elements from the keys list are paired with elements from the values list.
# num1 = [1,2,3,4]
# string = ["a","b","c","d"]
# def list_into_dict(x,y):
#     print(dict(zip(x,y)))
#
# list_into_dict(num1,string)

#
# 17. Dictionary Key Search: Implement a function that takes a dictionary and a key as input, and returns True if the key is present in
# the dictionary, False otherwise.
# dict = {
#     1:"a",
#     2:"b",
#     3:"c",
#     4:"d"
# }
# find = 4
# def key_in_dict(dict,x):
#     print(x in dict)
#
# key_in_dict(dict,find)


# dic1 = {
#     "first":[1,2],
#     "second":[3,4]
# }
#
# def sum(x):
#     for keys,value in x.items():
#         value = sum(value)
#         print(value)
# sum(dic1)
#
# 19. Function to Split List by Value: Design a function that takes a list and a value as input and returns two lists: one containing
# all elements less than the given value, and the other containing all elements greater than or equal to the given value.
#
# def two_list(x,y):
#     high = []
#     lower = []
#     for i in x:
#         if i > y:
#             high.append(i)
#         elif i <= y:
#             lower.append(i)
#     print(high,lower)
# two_list([1,2,3,4,5,6,7,8,9,10],5)


#20. List Intersection Counter: Write a function that takes two lists as input and returns the count
# of unique elements that are common between the two lists.
# 
# list1 = [1,2,3,4,5]
# list2 = [10,19,2,1,20]
# def common_number(x,y):
#     count = 0
#     for i in list1:
#         for j in list2:
#             if i == j:
#                 count += 1
#     print(count)
# common_number(list1,list2)