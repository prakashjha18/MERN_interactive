import mongoose from 'mongoose'

const questionschema = mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
})
//get post findbyid
const faqSchema = mongoose.Schema(
  {
    header: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    questions:[questionschema]
  },
  {
    timestamps: true,
  }
)

const Faq = mongoose.model('Faq', faqSchema)

export default Faq
