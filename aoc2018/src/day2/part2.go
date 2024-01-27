package main

import (
	"bufio"
	"fmt"
	"io"
	"log"
	"os"
	"strings"
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

func readerToStrings(input io.Reader) []string {
	scanner := bufio.NewScanner(input)
	var res []string
	for scanner.Scan() {
		res = append(res, scanner.Text())
	}
	return res
}

func soln(words []string) string {
	set := make(map[string]int)
	for _, s := range words {
		for empty := 0; empty < len(s); empty++ {
			sb := strings.Builder{}
			for i := 0; i < empty; i++ {
				sb.WriteByte(s[i])
			}
			sb.WriteRune('_')
			for i := empty + 1; i < len(s); i++ {
				sb.WriteByte(s[i])
			}
			set[sb.String()]++
		}
	}

	for k, v := range set {
		if v == 2 {
			sb := strings.Builder{}
			for i := 0; i < len(k); i++ {
				r := rune(k[i])
				if r == '_' {
					continue
				}
				sb.WriteRune(r)
			}
			return sb.String()
		}
	}
	return ""
}

func main() {
	content, err := os.Open("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	words := readerToStrings(bufio.NewReader(content))
	fmt.Println(soln(words))
}
