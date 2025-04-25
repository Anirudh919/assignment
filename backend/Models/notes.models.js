import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      // required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    attachments: [
      {
        type: String, // file paths or URLs
      },
    ],
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);

export const Notes = mongoose.model("Notes", noteSchema);
