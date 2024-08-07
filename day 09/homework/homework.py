# x = [2, 4, 6, 2, 4, 7, 2, 9]
# while 4 in x:
#     x.remove(4)
# print(x)




family = ["vaso", "marina", "nika", "dato"]
age = [42, 52, 16, 24]

fl1 = "ჩემი დედაა {} არის {} წლის".format(family[1], age[0])

fl2 = "ჩემი მამაა {} არის {} წლის".format(family[0], age[1])

fl3 = "მე ვარ {} ვარ {} წლის".format(family[2], age[2])

fl4 = "ჩემი ძმაა {} არის {} წლის".format(family[3], age[3])
print(fl1,fl2,fl3,fl4)


print("after 10 years")
age_after = []
for i in age:
    x = (i) + 10
    age_after.append(x)

# age_after = [52, 62, 26, 34]
fl_age1 = "ჩემი დედაა {} არის {} წლის".format(family[1], age_after[0])

fl_age2 = "ჩემი მამაა {} არის {} წლის".format(family[0], age_after[1])

fl_age3 = "მე ვარ {} ვარ {} წლის".format(family[2], age_after[2])

fl_age4 = "ჩემი ძმაა {} არის {} წლის".format(family[3], age_after[3])
print(fl_age1, fl_age2, fl_age3, fl_age4)










