total_adults = 10
total_child = 3
ticket_cost = 25
total_cost = 0
i = 1
while i <= total_adults:
    total_cost += ticket_cost
    i += 1

    if i <= total_child:
        continue

print(total_cost)
