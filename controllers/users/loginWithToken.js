const { User } = require("../../models/user");
const { Unauthorized } = require("http-errors");

const loginWithToken = async (req, res) => {
  const { token: userToken } = req.body;

  const user = await User.findOne({ token: userToken });

  if (!user) {
    throw Unauthorized("Email or password is wrong");
  }

  res.status(200).json({
    message: "Login completed successfully",
    dataUser: {
      name: user.name,
      email: user.email,
      birthday: user.birthday,
      phone: user.phone,
      city: user.city,
      avatarURL: user.avatarURL,
      token: userToken,
      _id: user._id,
    },
  });
};

module.exports = loginWithToken;
