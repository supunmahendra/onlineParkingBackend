const mongoose =require('mongoose');

//Slots
const parkingSchema = new mongoose.Schema(
    {
        spotNo: { type: Number, required: true, unique: true },
        reservedBy: { type: String, required: true },
        dateFrom : { type: Date, default:Date.now },
        dateTo: { type: Date, default:Date.now }
    },
    { timestamps: true }
  );

module.exports = mongoose.model('parkingSlot', parkingSchema);