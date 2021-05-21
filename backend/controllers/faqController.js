import asyncHandler from 'express-async-handler'
import Faq from '../models/faqModel.js'


const updatequestion = asyncHandler(async (req, res) => {
    const faq = await Faq.findById(req.params.faqid)

    //const faq  = await Faq.questions.id(req.params.qid);
    //const question = faq.questions.find("_id":req.params.qid);
    if (faq) {
        faq.questions.id(req.params.qid).question = req.body.question;
        faq.questions.id(req.params.qid).answer = req.body.answer;
        await faq.save();
        res.status(201).json({ message: 'question saved' })

    } else {
        res.status(404)
        throw new Error('request Not Found')
    }

})
const createFaq = asyncHandler(async (req, res) => {
    const faq = new Faq({
        header: req.body.header,
        icon: req.body.icon,
    })

    const createdfaq = await faq.save()
    res.status(201).json(createdfaq)
})

const getfaqs = asyncHandler(async (req, res) => {
    const allfaqs = await Faq.find();
    res.json(allfaqs);
})

const getsinglefaq = asyncHandler(async (req, res) => {
    const sfaq = await Faq.findById(req.params.id)

    if (sfaq) {
        res.json(sfaq)
    } else {
        res.status(404)
        throw new Error('request Not Found')
    }
})

const createqestionforfaq = asyncHandler(async (req, res) => {
    const faq = await Faq.findById(req.params.id)
    if (faq) {
        const question = {
            question: req.body.question,
            answer: req.body.answer,
        }
    
        faq.questions.push(question)
        await faq.save();
        res.status(201).json({ message: 'question added' })
    } else{
        res.status(404)
        throw new Error('Product not found')
    }
})



export { createFaq, getsinglefaq, getfaqs,createqestionforfaq, updatequestion }
