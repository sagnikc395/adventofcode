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
	for _, line := range strings.Split(input, "\n") {
		temp, err := strconv.Atoi(line)
		if err != nil {
			log.Fatal(err)
		}
		sum += temp
	}
	return sum
}

func main() {
	content, err := os.ReadFile("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	strcontent := string(content)
	fmt.Println(freqCount(strings.TrimRight(strcontent, "\n")))

}
