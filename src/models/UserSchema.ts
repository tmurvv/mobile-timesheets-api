import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

interface IUser {
    firstname?: string,
    lastname?: string,
    email: object,
    role?: string,
    password: string,
    passwordChangedAt?: object,
    reminderLastSent?: object
}

// Users
const usersSchema = new mongoose.Schema<IUser>({
    firstname: {type: String},
    lastname: {type: String},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/, 'Email address not valid. Please try again.']
    },
    role: {
        type: String
    },
    password: {
        type: String,
        minlength: 8
    },
    passwordChangedAt: {
        type: Date,
        default: Date.now
    },
    reminderLastSent: {
        type:Date, 
        default: Date.now
    }
},{ versionKey: false });

// usersSchema.pre('save', async function(next) {
//     if(!this.isModified('password')) return next;
//     const saltRounds=10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//     next();
// });

// usersSchema.pre('save', async function(next) {
//     if(!this.isModified('password') || this.isNew) return next;
//     this.passwordChangedAt = Date.now()-1000; // one sec earlier so it for sure happens before JWT cookie is set
//     next();
// });

// usersSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
//     if (this.passwordChangedAt) {
//         const changeTimeStamp = parseInt(this.passwordChangedAt.getTime()/1000, 10);
//         return JWTTimestamp < changeTimeStamp;
//     }
//     return false;
// }

export const Users = mongoose.model('Users', usersSchema);
