interface Triangle {
    ladeA: number,
    ladeB: number,
    ladeC: number,
}

const t1: Triangle = {
   
    ladeA: 2,
    ladeB: 3,
    ladeC: 6

}




 const isValidTriangle = ({ladeA, ladeB, ladeC}: Triangle) => {

     return ((ladeB + ladeC) > ladeA && (ladeA + ladeC ) > ladeC && (ladeA + ladeA) > ladeC ) 

     
}

console.log(isValidTriangle(t1))