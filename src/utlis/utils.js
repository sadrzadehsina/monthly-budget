export const toMoney = (value) => {

  const amount = parseFloat(value);
	let string_amount;

  const format = function () {
    string_amount = amount.toFixed(2);
    string_amount = separateThousands();
    return (string = addSymbol());
  };

  const separateThousands = function () {
    let after_dot, before_dot, pattern, _ref;
    (_ref = string_amount.split('.')),
      (before_dot = _ref[0]),
      (after_dot = _ref[1]);
    pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(before_dot)) {
      before_dot = before_dot.replace(
        pattern,
        '$1' + '.' + '$2',
      );
    }
    return [before_dot, after_dot].join(',');
  };

  const addSymbol = function () {
    let string;
    string = [string_amount];
    string.splice(0, 0, '$');
    return string.join('');
  };

  return format();
};
