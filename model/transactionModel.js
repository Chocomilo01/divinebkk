const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["deposit", "withdrawal"],
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CustomerModel",
      required: true,
    },

    name: {
      type: String,
      trim: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },

    choose: {
      type: String,
      enum: ["debit", "credit"],
      required: true,
    },

    collectedBy: {
      type: String,
      trim: true,
    },

    uploadedBy: {
      type: String,
      trim: true,
    },

    AccountOfficer: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    paymentDate: {
      type: Date,
      required: true,
    },

    modeOfPayment: {
      type: String,
      enum: ["cash", "transfer", "credit_card"],
    },

    balance: {
      type: Number,
      required: true,
      default: 0,
    },

    isOverdraft: {
  type: Boolean,
  default: false,
},

overdraftAmount: {
  type: Number,
  default: 0,
},
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("TransactionModel", TransactionSchema);
