let dna: string = 'gtgggggggtttatgcctttagaacagcagactgataactccaatcctgggtt'
let match: string = 'aga'

const isSubsequenceInDna = (dna: string, match: string): boolean => {

    let subsequence: string = ''

    for (let i = 0; i <= dna.length - match.length; i++) {
        subsequence = dna.slice(i, i + match.length)
        if (subsequence === match) {
            return true
        }
    }
    return false

}

console.log(isSubsequenceInDna(dna, match))
