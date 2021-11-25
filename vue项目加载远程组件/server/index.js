const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  console.log(ctx);
  ctx.body = 'Hello World';
});



app.listen(3066, () => {
  console.log("listen port is 3066");
});