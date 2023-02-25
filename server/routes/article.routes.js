const express = require('express')

const ArticleService = require('../controllers/Article')

const router = express.Router()
const service = new ArticleService

router.get('/', async (req, res, next) => {
    try {
        const articles  = await service.findAll()
        res.status(201).json(articles)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        const article  = await service.findArticle(id)
        res.status(201).json(article)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const data = req.body

        const newArticle = await service.create(data)
        res.status(201).json(newArticle)
    } catch (error) {
        next(error)
    }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const data = req.body
        const { id } = req.params

        const updateArticle = await service.update(id, data)
        res.status(201).json(updateArticle)
    } catch (error) {
        next(error)
    }
}
)
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        const deleteArticle = await service.delete(id)
        res.status(201).json(deleteArticle)
    } catch (error) {
        next(error)
    }
})

module.exports = router