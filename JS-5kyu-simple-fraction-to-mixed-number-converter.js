function mixedFraction(s) {
  // 1. Separar numerador y denominador
  const [x, y] = s.split('/').map(Number);

  // 2. Dividir por cero lanza error
  if (y === 0) throw new Error('ZeroDivisionError');

  // 3. Si el numerador es 0, el resultado es 0 (evita "-0")
  if (x === 0) return '0';

  // 4. El signo es negativo solo si x e y tienen signos distintos
  const sign = (x < 0) !== (y < 0) ? '-' : '';

  // 5. Trabajar con valores absolutos
  const num = Math.abs(x);
  const den = Math.abs(y);

  // 6. Parte entera y resto
  const whole = Math.floor(num / den);
  const rest = num % den;

  // 7. Si no sobra nada, solo se devuelve la parte entera
  if (rest === 0) return sign + whole;

  // 8. Simplificar la fraccion propia con el maximo comun divisor
  const g = gcd(rest, den);
  const fraction = `${rest / g}/${den / g}`;

  // 9. Si no hay parte entera, solo la fraccion
  if (whole === 0) return sign + fraction;

  // 10. Caso general: entero + espacio + fraccion
  return `${sign}${whole} ${fraction}`;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
