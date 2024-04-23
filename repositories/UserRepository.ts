import db from '../config/config-db';
import User from '../Dto/UserDto';

class UserRepository {

    static async add(user: User){
        const sql = 'INSERT INTO users (email, name, lastName, password, role, phoneNumber, address) VALUES (?,?,?,?,?,?,?)';
        const values = [user.email, user.name, user.lastName, user.password, user.role, user.phoneNumber, user.address ];
        return db.execute(sql, values);
    }

    static async auth(email: string){
        const sql = 'SELECT password FROM users WHERE email= ?';
        const values = [email];
        return db.execute(sql, values);
    }
    
}



export default UserRepository;