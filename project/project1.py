user = input("please enter your name:")
angarishi = 0

def bank(x):
    moqmedeba = int(input("airchiet moqmedeba:1 , 2:"))
    y = x
    if moqmedeba == 1:
        i = (int(input("sheitanet tanxa:")))

        y += i
        print(y)
    elif moqmedeba == 2:
        z = (int(input("gamoitanet tanxa:")))
        y -= z

        print(y)
        if y < z :
                print("error")
        else:
                print (y - z)




bank(angarishi)
