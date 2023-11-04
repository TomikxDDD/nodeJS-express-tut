const http = require('http')

const server = http.createServer((request, response) => {
  switch (request.url) {
    case '/':
      response.end('This is our homepage')
      break
    case '/about':
      response.end('This is a short introduction of our story')
      break
    case '/pricing':
      response.end('This is how much you will need to pay us for our service')
      break
    default:
      response.end(`<h1>Oops</h1><p>We could not find the page you are looking for: ${request.url}</p><a href='/'>Go to home page</a>`)
  }
})

server.listen(5555)