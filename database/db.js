import mongoose from 'mongoose'
const Connection =async ()=>{
    try{
await mongoose.connect(URL,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
    
    
})
console.log("Connected Successfully ...")
} catch(error){
    console.log("Error While connecting...")
}
}
export default Connection;