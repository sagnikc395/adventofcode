def main():
    with open("input.txt", "r") as f:
        p = f.read().split("\n")

    p = [int(i) for i in p]
    res = 1
    for item1 in p:
        for item2 in p[::-1]:
            if item1 + item2 == 2020:
                res = item1 * item2
                break

    print(res)


if __name__ == "__main__":
    main()
