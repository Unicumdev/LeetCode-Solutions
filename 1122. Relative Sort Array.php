  $inside = array_merge(...array_map(function($x) use ($arr1) {
    return array_filter($arr1, function($y) use ($x) {
      return $y == $x;
    });
  }, $arr2));
  $outside = array_filter($arr1, function($x) use ($arr2) {
    return !in_array($x, $arr2);
  });
  sort($outside);
  return array_merge($inside, $outside);
