const express = require('express')
var Article = require('./../models/article')
const router = express.Router()

router.get('/articles/new', (req, res) => {
	res.render('articles/new', { article: new Article() })
})

router.get('/articles/:slug', async (req, res) => {
	var article = await Article.findOne({ slug: req.params.slug })
	if (article == null) res.redirect('/')
	res.render('articles/show', {article:article})
})

router.post('/articles/', async (req, res) =>{
	var article = new Article({
		title: req.body.title,
		description: req.body.description,
		markdown: req.body.markdown
	})
	try {
		article = await article.save()
		res.redirect(`/articles/${article.slug}`)
	} catch (e) {
		console.log(e)
		res.render('articles/new', { article: article })
	}
})

module.exports = router