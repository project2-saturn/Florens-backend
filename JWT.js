const { sign, verify } =require( "jsonwebtoken");


const generateToken=(user)=>{
    const token =sign({email:user.email},"jwtflorens")
        return token;
};

const verifyToken=(req,res,next)=>{
    console.log(req);

const aToken=req.cookies["token"]
if(!aToken)
{
    res.json(401).send("Wrong user")
}
else if(verify(aToken,"jwtflorens"))
{
    return next();
}

}


module.exports={generateToken,verifyToken};