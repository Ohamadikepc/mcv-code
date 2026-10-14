const logger = (req, res, next) => {
    const result = `API is an Endpoint : $(req.url) and Method: $
    {req.method} was called at: ${date.toLocaleDateString()}`;

    console.log (result);

    next()
};

module.exports = logger