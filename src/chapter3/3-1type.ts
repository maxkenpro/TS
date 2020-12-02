//any
let a: any = 666
let b: any = ['danger']
let c = a + b  //at this moment TS should inform us Error but if we use any, TS does not tell us

//unknown
let a: unknown = 30
let b = a === 123
let c = a + 10

