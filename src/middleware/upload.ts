import multer from 'multer';
import path from 'path';

const maxSize = 50 * 1024 * 1024; // 50MB max file size

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public'); // Ensure this directory exists
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname.toLowerCase());
        cb(null, Date.now() + ext);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
});

export default upload;

