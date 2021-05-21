import mongoose from 'mongoose'

const iconSchema = mongoose.Schema(
  {
    name:[{
        type: String
    }]
  }
)

const Icon = mongoose.model('icon', iconSchema)

export default Icon
