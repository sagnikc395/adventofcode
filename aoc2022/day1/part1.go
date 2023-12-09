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

	scanner := bufio.NewScanner(file)
	//max sum of calories
	maxCalories := 0
	currentElfCalories := 0

	for scanner.Scan() {
		snack, err := strconv.Atoi(scanner.Text())
		currentElfCalories += snack
		if err != nil {
			if currentElfCalories > maxCalories {
				maxCalories = currentElfCalories
			}
			currentElfCalories = 0
		}
	}
	fmt.Println(maxCalories)
}
