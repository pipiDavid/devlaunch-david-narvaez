type Candidate =  'Alice' | 'Bob' | 'Charlie'

interface Vote {
    id: string
    candidate: Candidate
}

const voting = (votes: Vote[]) => {
   const voteCount = new Map<string, number>()

   votes.forEach(({candidate}) => {
    if(voteCount.has(candidate)) {
      const candidateVotes = voteCount.get(candidate) || 0
      voteCount.set(candidate, candidateVotes + 1)
    } else {
      voteCount.set(candidate, 1)
    }
   })

   let maxVote = 0
   let winner = ''

   for(const [candidate, count] of voteCount.entries()) {
    if(count > maxVote) {
      maxVote = count
      winner = candidate
    }
   } 
  }





const votes: Vote[] = [
    {id: '114289451', candidate: 'Alice'},
    {id: '414249420', candidate: 'Bob'},
    {id: '116820394', candidate: 'Alice'},
    {id: '478989489', candidate: 'Charlie'},
    {id: '172838475', candidate: 'Bob'},
    {id: '429393004', candidate: 'Alice'}

]

console.log(votes)