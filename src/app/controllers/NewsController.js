class NewsController {
    // [GET]/news/:slug
    show(req,res){
        return res.send('NEWS DETAIL!!');
    }
      //[GET]/news
      index(req,res){
        return res.render('news');
    }
}

module.exports = new NewsController;

//const newsController = require('./NewsController');