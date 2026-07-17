const users =[
    {   id: 101,
        name: 'Rachid',
        role: 'Dev'
    },{
        id: 103,
        name: 'Mario',
        role: 'A/c'
    }
]
const getUsers = (req,res)=>{
    res.status(200).json({
        success: true,
        message: "Users Fetched successfully",
        data: users})
}
module.exports={getUsers}