use std::fs;

fn main() {
    let contents = fs::read_to_string("./input.txt")
        .expect("Failed")
        .split("\n");
    let mut valid = 0;

    for content in contents {
        let vals = content.split(":");
        
    }
}
