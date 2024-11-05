const multer = require('multer');
const util = require('util');
const ErrorConstant = require('../constants/error.constant');

// Disk Storage
const uploadImage = (uploadPath = '') => {
    return multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `storage${uploadPath}`)
            },
            filename: function (req, file, cb) {
                const originalFileName = file.originalname;
                const originalIFileExt = originalFileName.split('.').pop();
                let originalFileWithoutExt = originalFileName.slice(0, originalFileName.lastIndexOf('.'));
                const fileName = originalFileWithoutExt.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase() + '_' + new Date().toISOString().replace(/\D/g, '') + '.' + originalIFileExt;
                cb(null, fileName);
            }
        }),
        fileFilter: (req, file, cb) => {
            const type = file?.mimetype?.split('/')[0] || ''
            if (type === 'image') {
                cb(null, true);
            } else {
                cb(new Error(ErrorConstant.FILE_REQUIRED));
            }
        }
    });
}

// Memory Storage
const uploadImageS3 = () => {
    return multer({
        storage: multer.memoryStorage(),
        fileFilter: (req, file, cb) => {
            const type = file?.mimetype?.split('/')[0] || ''
            if (type === 'image') {
                cb(null, true);
            } else {
                cb(new Error(ErrorConstant.FILE_TYPE_IS_NOT_VALID));
            }
        }
    })
}

// const multerErrorWrapper = (upload) => {
//     return (req, res, next) =>
//         upload(req, res, error => {
//             console.log(error);
//             if (error instanceof multer.MulterError) {
//                 return res.status(400).send({
//                     is_success: false,
//                     message: error.message
//                 });
//             }
//             if (error) {
//                 return res.status(400).send({
//                     is_success: false,
//                     message: error.message
//                 });
//             }
//             next();
//         })
// }

module.exports = { uploadImage, uploadImageS3 }