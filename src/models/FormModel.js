const mongoose = require('mongoose');

//========================= for creating a schema (structure of your collection)
const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phno: {
        type: Number,
      
    },

    // email:{
    //     type:string,
    //     required:true,

    // },
   
    date: {
        type: Date,
        default: Date.now(),
    }
})

//============================================== creating a collection=======================================================
const FormModel = new mongoose.model('user', formSchema);
// module.exports = FormModel;

//=================================================== insertion ===============================================================
const InsertDocument = async () => {
    //     const user1 = new FormModel({
    //         name:'abc',
    //         phno:12345,
    //     });
    //    await user1.save();
    const user1 = new FormModel({
        name: 'abc',
        phno: 12345,
    });
    const user2 = new FormModel({
        name: 'def',
        phno: 12345,
    });
    const user3 = new FormModel({
        name: 'ghi',
        phno: 12345,
    });

    await FormModel.insertMany([user1,user2,user3]);

}

InsertDocument();

//=========================================================== get data==========================================================================

// const getDocument =async (name) =>{
//     const users = await FormModel.find({name});
//     console.log(users);
// }
// getDocument('abc')


// const getDocument =async (_id) =>{
//     const users = await FormModel.find({_id}).select(['-_id']);
//     console.log(users);
// }
// getDocument('630726e27a1762faae223089')

// ==================================update document=============================================

// const updateDocument = async(_id)=>{
//     const updateUser = await FormModel.findByIdAndUpdate({_id},{$set:{name:'abcdefgh'}},{new:true});
//     console.log(updateUser);
// }
// updateDocument('630726e27a1762faae223089')

// ======================================Delete Document=======================================
// const deleteDocument = async(_id)=>{
//     // const user = await FormModel.findByIdAndDelete({_id});
//     // console.log(user);
//     const user = await FormModel.deleteMany({});
//     console.log(user);
// }
// deleteDocument('630726e27a1762faae223089')
