package util

import (
	"io/ioutil"
	"path"
	"path/filepath"
	"runtime"
	"strings"
)

// wrapper over io/ioutil.ReadFile but also determines the dynamic absolute path to the file
func ReadFile(pathFromCaller string) string {
	_, filename, _, ok := runtime.Caller(1)
	if !ok {
		panic("Could not find caller of util.ReadFile")
	}
	absolutePath := path.Join(path.Dir(filename), pathFromCaller)
	content, err := ioutil.ReadFile(absolutePath)
	if err != nil {
		panic(err)
	}
	strContent := string(content)
	return strings.TrimRight(strContent, "\n")
}

// port of _dirname from node
func Dirname() string {
	_, filename, _, ok := runtime.Caller(1)
	if !ok {
		panic("getting calling function")
	}
	return filepath.Dir(filename)
}
