export interface IDatabase {
    save(data: string): void;
}

export class MySqlDatabase implements IDatabase {
    save(data: string): void {
        console.log(`${data} is being saved to MySQL`);
    }
}

export class MongoDbDatabase implements IDatabase {
    save(data: string): void {
        console.log(`${data} is beign saved to MongoDb`);
    }
}
export class HighLevelModule {
    constructor(private database: IDatabase) {}
    execute(data: string): void {
        this.database.save(data);
    }
}
