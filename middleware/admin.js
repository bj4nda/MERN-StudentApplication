module.exports = function(req, res, next) {
    console.log(req.teacher)
    if(!req.teacher.isAdmin) return res.status(403).json("not authorized");

    next();
}