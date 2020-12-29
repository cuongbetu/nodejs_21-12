class SiteController {
    // [GET]/
    search(req,res){
        return res.render('search');
    }
      //[GET]/search
      index(req,res){
        return res.render('home');
    }
}

module.exports = new SiteController;

//const newsController = require('./NewsController');