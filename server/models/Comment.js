const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },

  commentText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  //   commentAuthor: {
  //     type: String,
  //     required: true,
  //     trim: true,
  //   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
