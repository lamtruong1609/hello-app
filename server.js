const app = require('./app');
const appPort = 8080;

app.listen(appPort, () => {
    console.log(`Hello app listening on port ${appPort}`);
});
