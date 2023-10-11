class ContactController {
  index(req, res) {
    res.send('contact page');
  }
}

module.exports = new ContactController();
