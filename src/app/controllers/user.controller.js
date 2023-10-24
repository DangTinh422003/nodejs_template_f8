const userModel = require('../models/users.model');

class UserController {
  index(req, res) {
    res.send('oke');
  }

  async detail(req, res) {
    try {
      const emailUser = req.params.email;
      const myUser = await userModel.find({ email: emailUser }).exec();
      console.log(myUser);
      res.render('pages/user.hbs', { myUser: myUser[0] });
    } catch (error) {
      res.send("khong tim thay user")
    }
  }
}

module.exports = new UserController();
