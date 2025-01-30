const triangle = {
    ladeA: 7,
    ladeB: 10,
    ladeC: 5,
}

const isValidTriangle = (triangle) => {

    const {ladeA, ladeB, ladeC} = triangle

     return ((ladeB + ladeC) > ladeA && (ladeA + ladeC ) > ladeC && (ladeA + ladeA) > ladeC ) 

     
}

console.log(isValidTriangle(triangle))