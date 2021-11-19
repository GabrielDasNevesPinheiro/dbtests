import {Database, OPEN_READWRITE} from 'sqlite3';

class DBController {
    db: Database;

    constructor (dbfile: string) {

        this.db = new Database(dbfile, 
            OPEN_READWRITE, (error) => {
                if (error) return console.log(error.message);
            });
        console.log('connected to database file');

    }

    createTable (commands: string) {
        this.query(commands, 'NEW TABLE');
    }
    deleteTable (commands: string) {
        this.query(commands, 'DELETE TABLE');
    }

    read (commands: string) {
        let req: Array<{}>;
        req = [];
        console.log('[!] LEITURA ==>  ', commands);
        this.db.all(commands, [], (error, rows) =>{
            if(error) return console.log(error.message);
            rows.forEach((row) => {
                req.push(row);
            });
            console.log(req);
        });
    }

    insertData (commands: string) {
        this.query(commands, 'NEW DATA')
    }

    private query(commands: string, name: string) {
        console.log(`[!] ${name} ==>  `, commands);
        this.db.run(commands, (error) =>{
            if(error) return console.log(error.message);
            console.log(`[!] ${name} SUCCESS`)
        });
    }

}



export { DBController };