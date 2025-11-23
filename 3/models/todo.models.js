import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },

    //relation
    createdVBy: {
      // Give sepacial type and refrence for relation
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    // Array of SubTodos
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);

/*
You can also do it like
const demo = new mongoose.Schema(
     {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },)


      and then use demo in subTodos array

      subTodos:[demo]
 */ 

// enum :['active','inactive']  --> only these two value allowed