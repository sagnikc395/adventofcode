package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func freqCount(input string) int {
	var sum int
	seen := map[int]bool{}
	for {
		for _, line := range strings.Split(input, "\n") {
			val, err := strconv.Atoi(line)
			if err != nil {
				log.Fatal(err)
			}
			sum += val
			if seen[sum] {
				return sum
			}
			seen[sum] = true
		}
	}
}

func main() {
	content, err := os.ReadFile("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	strcontent := string(content)
	fmt.Println(freqCount(strings.TrimRight(strcontent, "\n")))

}
