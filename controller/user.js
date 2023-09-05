const { text } = require('body-parser');
const fs = require('fs');

const arr=[{_id:1,name:"Ravi Chaudhary",age:20},{_id:3,name:"Shyam",age:34}];
exports.createUser = (req, res) => {
    const obj = req.body;
    arr.push(obj);
    console.log("arr",arr)
    return res.status(200).send({message:"Data written to file successfully",data:arr});

}
console.log("=============", arr)
exports.getData = (req, res) => {
    const id = req.params.id;
    const data = arr.find((ele) => {
        return ele._id == id
    })
    if (data)
        return res.status(200).send({ message: "Data found successfully", data });
    else
        return res.status(200).send({ message: "No data found" });
}

exports.updateData = (req, res) => {
    const id = req.body.id;
    if (id) {
        const index = arr.findIndex((ele) => {
            return ele._id == id
        })
        arr[index].name = req.body.name ? req.body.name: ""
        return res.status(200).send({ message: "Data found successfully", data: arr });
    }
    return res.status(400).send({ message: "id not provided" });
}

exports.deleteData = (req, res) => {
    try {
        const id = req.body.id;
        if (id) {
            const index = arr.findIndex((ele) => {
                return ele._id == id
            })
            //arr[index] = undefined;
            arr.splice(index,1);
            return res.status(200).send({ message: "Data found successfully", data: arr });
        }
        return res.status(400).send({ message: "id not provided" });
    } catch (err) {
        console.log("err", err)
    }
}
