const userInfo = require("../models/userModel.js");

//creating controller for register user
const registerUser = async (req, res) => {
  const { name, password, email, phone_number, gender, city } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the feilds");
  }
  const userExists = await userInfo.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  const user = await userInfo.create({
    name,
    password,
    email,
    phone_number,
    gender,
    city,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      password: user.password,
      email: user.email,
      phone_number: user.phone_number,
      gender: user.gender,
      city: user.city,
    });
  } else {
    res.status(400);
    throw new Error("Faild to Create the user");
  }
};

//creating controller for get user Data
const getUser = async (req, res) => {
  try {
    const userData = await userInfo.find({});
    res.status(200).json(userData);
  } catch (error) {
    res.status(500);
    console.log(error.message);
  }
};
//creating controller for delete user
const deleteUser = async (req, res) => {
  try {
    await userInfo.deleteOne({ _id: req.params.id });
    res.status(200).send("User deleted ");
  } catch (err) {
    res.status(500);
    console.log(err.message);
  }
};
//creating controller for update user
const updateUser = async (req, res) => {
  try {
    await userInfo.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
          phone_number: req.body.phone_number,
          gender: req.body.gender,
          city: req.params.city,
        },
      }
    );
    res.status(200).json(await userInfo.findById(req.params.id));
  } catch (err) {
    res.status(400);
    console.log(err.message);
  }
};

const authUser = async (req, res)=>{
   const { email, password } = req.body;
   const user = await userInfo.findOne({email});
   if(user){
    if(user.password === password){
      res.status(200).json(user);
    }
   }else{
    console.log("Enter valid email and password!")
   }
}
module.exports = { registerUser, getUser, deleteUser, updateUser, authUser };
