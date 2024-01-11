def guessnum():
    import random
    random_num = random.randint(1, 6)
    user_point = 0
    computer_point = 0
    while user_point or computer_point != 5:
        user = int((input("please enter num:")))
        if user > random_num:
            user_point+= 1
            print(f"{user_point} - you")
        else:
            computer_point += 1
            print(f"{computer_point} - computer")

        if user_point == 5:
            print("you win")
        else:
            print("computer win")




guessnum()