function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    let result = "";
    const abcLength = abc.length;

    if (abcLength === 0) {
        return str; 
    }
    if (key.length === 0) { 
    }


    for (let i = 0; i < str.length; i++) {
      const plainChar = str[i];
      
      const currentKeyChar = key.length > 0 ? key[i % key.length] : undefined;

      const plainCharPos = abc.indexOf(plainChar);

      if (plainCharPos === -1) { 
        result += plainChar;    
      } else {
        const shift = abc.indexOf(currentKeyChar);
        let encodedCharPos = (plainCharPos + shift);
        encodedCharPos = (encodedCharPos % abcLength + abcLength) % abcLength;

        result += abc[encodedCharPos];
      }
    }
    return result;
  };

  this.decode = function (str) {
    let result = "";
    const abcLength = abc.length;

    if (abcLength === 0) { 
        return str;
    }

    for (let i = 0; i < str.length; i++) {
      const encodedChar = str[i];
      const currentKeyChar = key.length > 0 ? key[i % key.length] : undefined;

      const encodedCharPos = abc.indexOf(encodedChar);

      if (encodedCharPos === -1) { 
        result += encodedChar;    
      } else {
    
        const shift = abc.indexOf(currentKeyChar); 

        let decodedCharPos = (encodedCharPos - shift);
        decodedCharPos = (decodedCharPos % abcLength + abcLength) % abcLength;

        result += abc[decodedCharPos];
      }
    }
    return result;
  };
}
