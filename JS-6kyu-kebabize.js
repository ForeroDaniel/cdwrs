function kebabize(str) {
  if (!str) return str; // Handle empty string case
    return str
        .replace(/([A-Z])/g, '-$1') // Insert hyphens before uppercase letters
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z-]/g, '') // Remove non-alphabetic characters (except hyphens)
        .replace(/^-+|-+$/g, ''); // Remove leading or trailing hyphens
}
