# 1. Sort : Convert the keys of a dictionary to a list and then sort them is ascending order.

# dict = {
#     "a":5,
#     "b":2,
#     "c":1,
#     "d":4,
#     "e":3
# }
#
# print(sorted(dict.values()))





# 2. Find Maximum or Minimum Value: Determine the maximum or minimum value in a dictionary and display its corresponding key.

# dict = {
#     "a":5,
#     "b":2,
#     "c":1,
#     "d":4,
#     "e":3
# }
#
# sorted_dict = sorted(dict.values())
# min_num = sorted_dict[0]
#
# def find_key(dict,val):
#     for key,value in dict.items():
#         if value == val:
#             print(key)
# find_key(dict,min_num)
#
# 3. Combining Items: Combine items from multiple dictionaries into a single dictionary or list of tuples.
#?
# 4. Check for Key Existence: Use get() to check if a key exists in the dictionary without raising a KeyError.

# dict = {
#     "a":5,
#     "b":2,
#     "c":1,
#     "d":4,
#     "e":3
# }
#
# print(dict.get("b"))



# 5. Remove and Return Value: Use pop() to remove a key-value pair from a dictionary and return the corresponding value.


# dict = {
#     "a":5,
#     "b":2,
#     "c":1,
#     "d":4,
#     "e":3
# }
#
# remove_value = dict.pop("b")
# print(remove_value)

# 6. Create a function called manual_keys

# dict = {
#     "a":5,
#     "b":2,
#     "c":1,
#     "d":4,
#     "e":3
# }
# def manual_keys(dict):
#     result = []
#     for key,value in dict.items():
#         result.append(key)
#     print(result)
# manual_keys(dict)

#
# 7. Create a function called manual_values

# dict = {
#     "a":5,
#     "b":2,
#     "c":1,
#     "d":4,
#     "e":3
# }
# def manual_keys(dict):
#     result = []
#     for key,value in dict.items():
#         result.append(value)
#     print(result)
# manual_keys(dict)
#
# 8. Create a function called manual_items

# dict = {
#     "a":5,
#     "b":2,
#     "c":1,
#     "d":4,
#     "e":3
# }
#
# def manual_items(dict):
#     result = []
#     for i in dict:
#         result.append([i,dict[i]])
#     print(result)
# manual_items(dict)

# 9. Create a function called manual_get

# dict = {
#     "a":5,
#     "b":2,
#     "c":1,
#     "d":4,
#     "e":3
# }
#
# def manual_get(dict,keys):
#     for key,value in dict.items():
#         if key == keys:
#             print(value)
# manual_get(dict,"b")


# 10. Create a function called manual_pop

#
# dict = {
#     "a":5,
#     "b":2,
#     "c":1,
#     "d":4,
#     "e":3
# }
#
# def manual_get(dict,valu):
#     result = {
#
#     }
#     for key, in dict.keys():
#         if key != valu:
#             result[key] = dict[key]
#     print(result)
# manual_get(dict,"b")

