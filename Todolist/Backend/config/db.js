import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Database Connected`);
    } catch ( error ) {
        console.log(`error in Data base wile connected ${error}`);
        process.exit(1);
    }
};

export default connectDb;
