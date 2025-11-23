import mongoose from 'mongoose';
// your schema
const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        }
        ,
        salary: {
            type: Number,
            required: true,
        }
        ,
        specialization: {
            type: String,
            required: true,
        },
        experience: {
            type: Number,
            required: true,
            default: 0,
        },
        worksInHospital: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Hospital',
                required: true,
            },

        ]

    },
    { timestamps: true } // include createdAt and upadtedAt
);