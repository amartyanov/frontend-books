const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('backend/db.json');
const middlewares = jsonServer.defaults();

server.use('/books', function(req, res, next) {
	setTimeout(next, 1000)
});
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
	console.log('JSON Server is running')
})