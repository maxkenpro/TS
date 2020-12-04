//any
let a: any = 666
let b: any = ['danger']
let c = a + b  //at this moment TS should inform us Error but if we use any, TS does not tell us

//unknown
let d: unknown = 30
let e = d === 123
let f = d + 10

if (typeof d === 'number') {
  let g = d + 10
}
