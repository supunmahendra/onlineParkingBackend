const mongoose =require('mongoose');

//user
const parkingSchema = new mongoose.Schema(
    {
        spotNo: { type: String, required: true, unique: true },
        reservedBy: { type: String, required: true },
        dateFrom : { type: date, required: true, default:date.now },
        dateTo: { type: date, required: true, default:date.now }
    },
    { timestamps: true }
  );

module.exports = mongoose.model('parkingUser', userSchema);