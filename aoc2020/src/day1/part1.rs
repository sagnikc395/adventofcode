use std::env;
use std::fs;

fn main() {
    let contents = fs::read_to_string("./input.txt").expect("Failed to read file");
    let contents = contents.split("\n");
    let list: Vec<i64> = contents
        .map(|s| s.parse::<i64>())
        .filter_map(Result::ok)
        .collect();

    for i in 0..list.len() {
        for j in 0..list.len() {
            if list[i] + list[j] == 2020 {
                let a = list[i];
                let b = list[j];
                println!("{}", a * b);
                break;
            }
        }
    }
}
