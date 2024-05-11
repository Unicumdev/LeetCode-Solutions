impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
           if strs.len() == 0 {
        return String::from("");
    }
    let mut prefix = strs[0].clone();
    for word in strs {
        while !word.starts_with(&prefix) {
            prefix = prefix[..prefix.len() - 1].to_string();
            if prefix.is_empty() {
                return String::from("");
            }
        }
    }
    return prefix;
    }
}
