function min(a, b) {
    if (a < b) {
      return a;
    }
    return b;
  };
  
  console.log(min(1, 1));
  
  function pow(x, n) {
    let result = x**n;
    return result;
    
  }
  
  console.log(pow(4, 2));

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    'Вы согласны?',
    () => alert('Вы согласились.'),
    () => alert('Вы отменили выполнение')
  );
  