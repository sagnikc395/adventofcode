package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"unicode"
)

func createSetOfItems(items string) (set map[rune]bool) {
	set = make(map[rune]bool)
	for _, item := range items {
		set[item] = true
	}
	return
}

func main() {
	file, err := os.Open("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	var sumPriority int

	for scanner.Scan() {
		//create 3 sets with the elements of each elf
		itemsFirst := createSetOfItems(scanner.Text())
		scanner.Scan()
		itemsSecond := createSetOfItems(scanner.Text())
		scanner.Scan()
		itemsThird := createSetOfItems(scanner.Text())

		//for each item of the first (or second or third) elf we check if the other 2 elves have that item too
		for itemsFirstElf := range itemsFirst {
			if itemsSecond[itemsFirstElf] && itemsThird[itemsFirstElf] {
				sumPriority += int(unicode.ToLower(itemsFirstElf) - 96)
				if unicode.IsUpper(itemsFirstElf) {
					sumPriority += 26
				}
				break
			}
		}
	}
	fmt.Println(sumPriority)
}
