export function toTitleCase(string: string) {
  return string
    .toLowerCase()
    .split(" ")
    .map((word) =>
      ALL_CAPS_WORDS.includes(word)
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

const ALL_CAPS_WORDS = ["tcg", "mtg"];
