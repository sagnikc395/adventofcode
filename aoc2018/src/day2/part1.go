package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
)

func letters(s string, count int) bool {
	set := make(map[rune]int)
	for i := 0; i < len(s); i++ {
		r := rune(s[i])
		set[r]++
	}
	for _, v := range set {
		if v == count {
			return true
		}
	}
	return false
}

func main() {
	content, err := os.Open("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	reader := bufio.NewScanner(content)
	two := 0
	three := 0
	for reader.Scan() {
		s := reader.Text()
		if letters(s, 2) {
			two++
		}
		if letters(s, 3) {
			three++
		}
	}
	fmt.Println(two * three)
}
