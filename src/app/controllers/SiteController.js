const { json } = require('express');
const Course = require('../model/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET]/home
    index(req, res, next) {
        // Course.find({},function(err,courses){
        //     if(!err){
        //         res.json(courses);
        //         res.status(202).json({error : "Thành công"});
        //     }
        //     else
        //     {res.status(500).json({error : "Không tìm thấy"})}
        // })

        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((error) => next(error));
    }
    //  [GET]/search
    search(req, res) {
        return res.render('search');
    }
}

module.exports = new SiteController();
