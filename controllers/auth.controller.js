// const { encrypt } = require('../services/crypto');
const { generateOTP } = require('../services/OTP');
const { sendMail } = require('../services/MAIL');
const User = require('../models/User');

module.exports.signUpUser = async (req, res) => {
  console.log(req.body.email)
  const email = req.body.email;
  // create new user
  const newUser = await createUser(email);
  if (!newUser[0]) {
    return res.status(400).send({
      message: 'Unable to create new user',
    });
  }
  res.send(newUser);
};

module.exports.verifyEmail = async (req, res) => {
  const { email, otp } = req.body;
  const user = await validateUserSignUp(email, otp);
  res.status(200).json({verify: user});
};


const createUser = async (email) => {
  const otpGenerated = generateOTP();
  const payload = {email: email, otp: otpGenerated}
  
  const newUser = await User.create(
    payload
  );
  if (!newUser) {
    return [false, 'Unable to sign you up'];
  }
  try {
    
    const sent = await sendMail({
      to: email,
      OTP: otpGenerated,
    });
    return [sent];
  } catch (error) {
    return [false, 'Unable to sign up, Please try again later', error];
  }
};

const validateUserSignUp = async (email, otp) => {
  const user = await User.findOne({
    email,
  });
  if (!user) {
    return [false, 'OTP Has Expired'];
  }
  if (user && user.otp !== otp) {
    return [false, 'Invalid OTP'];
  }

  return [true];
};
