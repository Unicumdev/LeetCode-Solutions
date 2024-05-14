    let mut maps = std::collections::HashMap::new();
    for str in strs {
        let s = str.chars().sorted().collect::<String>();
        if maps.contains_key(&s) {
            maps.get_mut(&s).unwrap().push(str.clone());
        } else {
            maps.insert(s, vec![str]);
        }
    }
    maps.values().cloned().collect()
