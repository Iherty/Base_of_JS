5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".
undefined == null // true Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.
undefined === null // false Строгое сравнение разных типов, поэтому false.
null == "\n0\n" // false
null === +"\n0\n" // false разные типы