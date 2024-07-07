const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === "Anil") {
        req.user = { name: "Anil", id: 7 };
        next();
    }
    else {
        res.status(401).send("Unauthorized");
    }
}

module.exports = authorize;