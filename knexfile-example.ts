    
import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'root',
      database : 'database'
    },
    migrations:{
        directory:path.resolve(__dirname,'src','database','migrations') 
    },
    seeds:{
        directory:path.resolve(__dirname,'src','database','seeds') 
    },
    useNullAsDefault: true,
}