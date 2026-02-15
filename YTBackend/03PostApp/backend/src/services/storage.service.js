const {ImageKit}=require('@imagekit/nodejs');

const imagekit=new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})

async function uploadImage(buffer){
    try {
        const response=await imagekit.files.upload({
            file: buffer.toString('base64'),
            fileName: "image.jpg"
        })
        return response;
    }catch (error) {
        console.log("error uploading image",error);
        throw error;
    }
}


module.exports=uploadImage;