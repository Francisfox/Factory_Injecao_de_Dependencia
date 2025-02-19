import createDatabaseConnection from "./database.js";

const dataBase = createDatabaseConnection();

function createCore() {
    function start() {
        console.log('> [core] Starting ...');
        dataBase.start();   
    }
    function stop() {
        console.log('> [core] Stoping ...');
    }
    return{
        start,
        stop
    }
}
export default createCore;