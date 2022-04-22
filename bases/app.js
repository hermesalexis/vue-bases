const app = Vue.createApp({ // lo que ponga en {{}} debe ser una expresión valida de
                            // sin embargo se debe tener en cuenta que no todas funcionan (if, wile)
  // template: `
    //<h1>Hola mundo</h1>
    //<p>dede app.js</p>
  // `
// hay dos formas de trabajar con vue 1. options api y 2. setup
  data () { // Es una función que maneja la data del componente
    return {
      quote: "I'm Batman",
      author: "Bruce",
      message: 'Hola mundo', // este objeto se puede utilizar donde se llame #myapp,
      messageTwo: "Soy un superhéroe"
    }
  },
  methods: { // aquí se pueden definir todos los métodos que quiere enlazar al objeto
    changeQuote() {
      console.log('Hola mundo')
      this.author = 'Hermes Galvis'

      this.capitalize()
    },
    capitalize() {
      this.quote = this.quote.toUpperCase()
    }
  }
})

app.mount('#myApp') // con el mount puedo montar la aplicaión de vue en el html