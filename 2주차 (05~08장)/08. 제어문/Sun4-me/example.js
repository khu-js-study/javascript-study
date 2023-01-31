// The "switch" statement

switch(x) {
    case 'value1':  //if x 가 'value1' 이면 실행
      ...
      [break]
  
    case 'value2':  //if x 가 'value2' 이면 실행
      ...
      [break]
  
    default:
      ...
      [break]
  }

// example

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}