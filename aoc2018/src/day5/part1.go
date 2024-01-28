package main

import (
	"errors"
	"fmt"
	"io"
	"log"
	"os"
)

var ErrDone = errors.New("no-op")
var ASCIIOffset = byte('a' - 'A')

func step(units string) (string, error) {
	offset := byte('a' - 'A')
	for i := 1; i < len(units); i++ {
		if units[i-1]-units[i] == offset || units[i-1]-units[i] == -offset {
			// removing units i-1 and i
			newStr := units[:i-1] + units[i+1:]
			return newStr, nil
		}
	}
	return units, ErrDone
}

func removeUnit(input string, unit byte) string {
	var newStr string
	for i := 0; i < len(input); i++ {
		if input[i] == unit || input[i] == unit+ASCIIOffset {
			continue
		}
		newStr += string(input[i])
	}
	return newStr
}

func part1(input string) int {
	var err error
	for err != ErrDone {
		input, err = step(input)
	}
	return len(input)
}

func main() {
	file, err := os.Open("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	data, err := io.ReadAll(file)
	if err != nil {
		log.Fatal(err)
	}
	ans := part1(string(data))
	fmt.Println("solution: ", ans)
}
