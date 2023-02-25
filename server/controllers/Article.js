const model = require('../models/Articles.js')

class ArticleService {
    constructor() {}

    async create(data) {
        const newArticle = await model.create(data)

        return newArticle
    }

    async findAll() {
        const articles = await model.find()

        return articles
    }

    async findArticle(id) {
        const article = await model.findById(id)

        return article
    }

    async update(id, data) {
        let article = await model.findById(id)

        article = await model.updateOne(data)

        return article
    }

    async delete(id) {
        const article = await model.findById(id)

        const deleteArticle = await model.deleteOne(article)

        return deleteArticle
    }
}


module.exports = ArticleService;