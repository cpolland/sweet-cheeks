const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  author: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  postText: {
    type: String,
    required: "You need to leave a post!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },

  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Post = model("Post", postSchema);

module.exports = Post;
