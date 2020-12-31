class NewsController {
    // [GET]/news
    index(req, res) {
        return res.render('news');
    }

    //[POST]/news/:slug
    show(req, res) {
        return res.send('News detail');
    }
}

module.exports = new NewsController();
