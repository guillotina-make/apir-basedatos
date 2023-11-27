import {createPool} from 'mysql2'


    export const pool = createPool({
             host: 'localhost',
             user: 'guillo',
             password: 'MessiGOAT2002#',
             port: 3306,
             database: 'companyguillo'  
         
})