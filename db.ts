import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';

const db = new Database('mysql', {
    host: 'localhost',
    username: 'root',
    password: 'Anhduc1234',
    database: 'cm',
    port: 3306,
});

class User extends Model {
    static table = 'cm.user';

    static fields = {
        id: { primaryKey: true, autoIncrement: true },
        phone: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        fullname: DataTypes.STRING,
        gender: DataTypes.INTEGER,
        description: DataTypes.STRING,
        birthday: DataTypes.DATETIME,
        avatar: DataTypes.STRING,
        status: DataTypes.INTEGER,
        fb: DataTypes.STRING,
        zalo: DataTypes.STRING,
        google: DataTypes.STRING,
        twitter: DataTypes.STRING,
        email: DataTypes.STRING,
    };
}

db.link([User]);

await db.sync();

export default User;



