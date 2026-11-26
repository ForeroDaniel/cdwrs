function alienLanguage(str) {
  return str
    .toUpperCase()                 // 1. Todo en mayúsculas
    .split(" ")                    // 2. Separamos en palabras
    .map(word =>                   // 3. A cada palabra...
      word.slice(0, -1) +          //    todo menos la última letra (ya va en mayúscula)
      word.slice(-1).toLowerCase() //    + la última letra en minúscula
    )
    .join(" ");                    // 4. Volvemos a unir con espacios
}
