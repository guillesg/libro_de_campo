const { Schema, model } = require('mongoose')

const ArticleSchema = Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    sulphate: { type: String },
    fertilize: { type: String, required: true },
    date: { type: Date, default: Date.now, required: true }
}) 

module.exports = model("Article", ArticleSchema, "article")