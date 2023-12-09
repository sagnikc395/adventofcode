package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
)

func main() {
	input, err := os.Open("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer input.Close()

	sc := bufio.NewScanner(input)

	var score int
	scores := map[string]int{"B X": 1, "C X": 2, "A X": 3, "A Y": 4, "B Y": 5, "C Y": 6, "C Z": 7, "A Z": 8, "B Z": 9}

	for sc.Scan() {
		score += scores[sc.Text()]
	}
	fmt.Println(score)
}
