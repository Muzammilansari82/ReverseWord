const ReverseWord = (abc) => {
  const Word = abc.split("")
  const RevWord = Word.reverse()
  return RevWord.join("")
}
console.log(ReverseWord("BANO QABIL HELLO WORLD:)"))
