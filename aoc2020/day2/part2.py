def main():
    with open("./input.txt", "r") as f:
        p = f.read().split("\n")

    countValidPass = 0

    for item in p:
        policy, passw = item.split(":")
        count, char = policy.split(" ")
        lowC, upperC = count.split("-")

        if passw[int(lowC) - 1] == char and passw[int(upperC) - 1] != char:
            countValidPass += 1
        elif passw[int(lowC) - 1] != char and passw[int(upperC) - 1] == char:
            countValidPass += 1
    print(countValidPass)


if __name__ == "__main__":
    main()
