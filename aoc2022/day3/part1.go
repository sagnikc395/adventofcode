package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"unicode"
)

func main() {
	file, err := os.Open("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	var sumPriority int

	for scanner.Scan() {
		items := make(map[rune]bool)
		for _, itemLeftPart := range scanner.Text()[:len(scanner.Text())/2] {
			items[itemLeftPart] = true
		}

		//range all the items of the second compartment
		for _, itemRightPart := range scanner.Text()[len(scanner.Text())/2:] {
			//if an item is in the first set its in both compartments
			if items[itemRightPart] {
				sumPriority += int(unicode.ToLower(itemRightPart) - 96)
				if unicode.IsUpper(itemRightPart) {
					sumPriority += 26
				}
				break
			}
		}
	}
	fmt.Println(sumPriority)
}
