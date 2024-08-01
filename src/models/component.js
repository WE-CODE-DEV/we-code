import { Schema, model, models } from 'mongoose';

const ComponentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    tags: [String],
    variants : [
      {
        theme: {
          type: String,
          required: true,
        },
        priClr: {
          type: String,
          required: true,
        },
        secClr: {
          type: String,
          required: true,
        },
      }
    ],
    isScale: {
      type: Boolean,
      default: false
    },
    componentName: {
      type: String,
      unique: true,
      required: true,
    },
    keyWords: [String],
    dateAdded: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

ComponentSchema.path('variants').schema.set('_id', false);

const Component = models.Component || model('Component', ComponentSchema);

export default Component;
