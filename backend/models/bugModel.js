import mongoose from 'mongoose'

const bugSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Bug = mongoose.model('Bug', bugSchema)

export default Bug
