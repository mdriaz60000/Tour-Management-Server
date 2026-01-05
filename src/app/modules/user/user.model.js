import mongoose, { Schema } from "mongoose"

const authProviderSchema = new Schema({
    provider: { type: String, required: true },
    providerId: { type: String, required: true },
},
{
    versionKey: false,
    _id: false
}
)


const userSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        role: { type: String, enum: ["user", "admin"], default: "user" },
        isDeleted: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
         isVerified: { type: Boolean, default: false },
        auths: [authProviderSchema],
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const user = mongoose.model("user", userSchema)