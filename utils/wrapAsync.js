function wrapAsync(fn){
    return function (req, res, next){
        fn(req, res, next).catch((err)=>{
            console.log(err.name);
            console.dir(err);
            next(err);
        });
    };
};
module.exports = wrapAsync;