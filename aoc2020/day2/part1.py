def main():
    with open("./input.txt", "r") as f:
        p = f.read().split("\n")

    countValidPass = 0

    for item in p:
        policy, passw = item.split(":")
        count, char = policy.split(" ")
        lowC, upperC = count.split("-")

        charcount = 0
        for c in passw:
            if c == char:
                charcount += 1

        if charcount >= int(lowC) and charcount <= int(upperC):
            countValidPass += 1

    print(countValidPass)

if __name__ == "__main__":
    main()
