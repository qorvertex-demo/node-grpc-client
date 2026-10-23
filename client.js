const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('demo.proto');
const proto = grpc.loadPackageDefinition(packageDefinition).hipstershop;

function fetchCart(userId, cb) {
  const client = new proto.CartService('localhost:7070', grpc.credentials.createInsecure());
  client.getCart({ user_id: userId }, cb);
}
function convert(money, cb) {
  const currencyClient = new proto.CurrencyService('localhost:7000', grpc.credentials.createInsecure());
  currencyClient.convert(money, cb);
}
module.exports = { fetchCart, convert };
