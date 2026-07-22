const checkPermission= (...roles)=>{
    return (req,res,next)=>{
        if(!req.user){
            return res.status(401).json({
                message: 'UnAuthorized'
            })
        }

        if(!roles.includes(req.user.role)){
            return res.status(403).json({
                message: "You don't have permissions"
            })
        }
        next()
    }
}

module.exports = checkPermission