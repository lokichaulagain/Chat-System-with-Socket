const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

// export default mongoose.model("Message", messageSchema);
module.exports = mongoose.model("Message", messageSchema);
