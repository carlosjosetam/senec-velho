import { AppRouter } from './app-router';
import * as  Express from 'express';
const app = Express();

// Configurations
app.use('/', Express.static('./'));
app.use('/app', Express.static('./app'));
app.use('/modules', Express.static('./node_modules'));

// Routes
app.use('/', AppRouter);

app.listen(3000, function() {
  console.log("Listening to port 3000");
});

export { app }
