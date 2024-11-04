import express from 'express';
import userRoute from './user/routes/route.user';
import dotenv from 'dotenv';
import { AppDataSource } from './database/data.source';

const app = express();


dotenv.config();



//User Routes
app.use('/api/users', userRoute);


AppDataSource.initialize().then(async () => {
    console.log('DATABASE CONNECTTION SUCCESSFUL...')
}).catch((err) => console.error(err));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`APP RUNNING ON PORT ${PORT}`)
})