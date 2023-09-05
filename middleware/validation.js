exports.userValidation = async (req, res, next) => {

    console.log(req.headers)
    const token = req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1]
    if (!token) {
        return res.status(400).send({ message: "pass the token" })
    }
    const envtoken = process.env.TOKEN || "ravi01"
    if (token === envtoken) {
        console.log("sucess to validate")
        next();
    } else {
        return res.status(400).send({ message: "unauthorised to access, wrong token" })
    }
}