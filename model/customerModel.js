const mongoose = require("mongoose");
const { generateUniqueAccountNumber } = require("../utils/uniqueNumber");

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    picture: {
      type: String, // Assuming you store the path or URL of the image
      required: false, // Adjust as needed based on your requirements
    },
    occupation: {
      type: String,
      required: false,
    },
    placeOfBirth: {
      type: String,
      required: false,
    },
    dateOfBirth: {
      type: String,
      required: false,
    },
    sex: {
      type: String,
      enum: {
        values: ["male", "female", "other"],
        message: "Value of gender must be one of male, female, or other.",
      },
      accountNumber: {
        type: String,
        required: false,
      },
      amount: {
        type: Number,
        required: false,
      },
    },
    zip: {
      type: String,
    },
    customersPhoneNo: {
      type: String,
      minLength: 8,
      maxLength: 16,
    },
    spouseName: {
      type: String,
      required: false,
    },
    spousePhoneNo: {
      type: String,
      required: false,
    },
    loanBalance: {
      type: Number,
      default: 0,
    },
    meansOfIdentification: {
      type: String,
      required: false,
    },
    meansOfIdentificationNumber: {
      type: String,
      required: false,
    },
    bankName: {
      type: String,
      required: false,
    },
    bankAccountNo: {
      type: String,
      required: false,
    },
    bankAccountName: {
      type: String,
      required: false,
    },
    nextOfKin: {
      type: String,
      required: false,
    },
    nextOfKinPhone: {
      type: String,
      required: false,
    },
    contactAddress: {
      type: String,
      required: false,
    },
    bvn: {
      type: String,
      unique: true,
      sparse: true,
      required: false,
    },
    maritalStatus: {
      type: String,
      required: false,
    },
    accountNumber: {
      type: String,
      unique: true,
      default: `${generateUniqueAccountNumber}`,
    },
    accountBalance: {
      type: Number,
      default: 0, // Initial balance is set to
    },
    officerIncharge: {
      type: String,
    },
    uploadedBy: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("CustomerModel", CustomerSchema);
