const mongoose= require ('mongoose');
const connectdb = async () =>{
    try {
         await mongoose.connect(process.env.mongo_URL);
        console.log('database is connected')
    } catch (error) {
        console.log(error)
    }                                                                                                             

};
module.exports= connectdb;