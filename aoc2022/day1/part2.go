package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
)

func main() {
	file, err := os.Open("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	sc := bufio.NewScanner(file)

	maxcalories1 := 0
	maxcalories2 := 0
	maxcalories3 := 0

	currentElfCalories := 0

	for sc.Scan() {
		snack, err := strconv.Atoi(sc.Text())
		currentElfCalories += snack
		if err != nil {
			if currentElfCalories > maxcalories3 {
				maxcalories3 = currentElfCalories
			}
			if maxcalories3 > maxcalories2 {
				maxcalories3, maxcalories2 = maxcalories2, maxcalories3
			}
			if maxcalories2 > maxcalories1 {
				maxcalories2, maxcalories1 = maxcalories1, maxcalories2
			}
			currentElfCalories = 0
		}
	}
	fmt.Println(maxcalories1 + maxcalories2 + maxcalories3)
}
