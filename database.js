function createDatabaseConnection(){
    function start(){
        console.log('> [database] Starting ...');
    }
    return{
        start
    }
}
export default createDatabaseConnection;