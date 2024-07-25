function buildCriteria(query) {
    const criteria = {};

    if (query.title) {
        criteria.title = { $regex: query.title, $options: "i" };
    }

    if (query.author) {
        criteria.author = { $regex: query.author, $options: "i" };
    }

    if (query.genre) {
        criteria.genre = { $regex: query.genre, $options: "i" };
    }

    return criteria;
}

module.exports = {
    buildCriteria,
};
