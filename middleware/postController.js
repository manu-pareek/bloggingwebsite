import post from "../schema/post-schema.js"



export const createPost=async (req,res)=>{
    // console.log(req.body)
    try{
      const Post=  await new post(req.body)
      Post.save()
    //   res.status(200).json("Post saved success")
      console.log("Blog saved success")
    }catch(err){
        // res.status(500).json(err)
    console.log('error while saving blog '+err)
    }
    res.end()
}
export const getAllPosts=async(req,res)=>{
  // console.log(req.query['username'])
   let user=  (req.query['username'])
  let category= (req.query['category'])
  // console.log(' user and cat : '+user + category)
  try{
  if(user) res.json(await post.find({username:user})) 
  else if(category) 
       res.json(await post.find({categories:category}))
  else res.json(await post.find({}))
  }catch(err){
    console.log(err)
  }
  res.end()
 }

export const getPost= async (req,res) =>{
  // console.log(" id is "+ req.params.id)
  try{
   
 

 res.json( await post.findById(req.params.id))
  } catch(err){
    console.log('error '+err)
    res.end()
  }
 }
 export const updatePost= async (req,res) =>{
  
  try{
 res.json( await post.findByIdAndUpdate(req.params.id,{$set : req.body}))
  } catch(err){
    console.log('error '+err)
    res.end()
  }
 }
 export const deletePost= async (req,res) =>{
  let  blog=await post.findById(req.params.id)
  await blog.delete()
  res.json('Success')
 }