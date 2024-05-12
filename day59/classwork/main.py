listt = [1,2,3,4,5]
def num (x):
    remove_number = listt[0]
    new_list = []
    for i in x:
        if i > remove_number:
            remove_number = i
    x.remove(remove_number)
    return x

print(num(listt))