// [GET] /
module.exports.home = (req,res,next) => {
    res.render("client/pages/home/index",{title:'Trang chu',message:'Day la trang HOME'});
}