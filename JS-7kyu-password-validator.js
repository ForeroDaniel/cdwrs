const password = str => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(str);
