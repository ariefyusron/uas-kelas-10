const variabel = 'ini string'
const integer = 1092
const boolean = true

const object = {
  variabel: 'ini string',
  integer: 12091,
  boolean: true
}

const array = ['strs', 12313, true, object]

array.map((data,index) => {
  console.log(`no ${index+1} ${data}`)
  console.log('---------------------')
})