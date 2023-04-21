import { Router } from 'express';
import multer from "multer"

import * as ApiController from '../controllers/apiController';

const upload = multer({
    dest: "./temp"
})

const router = Router();


router.post("/upload", upload.single("avatar"), ApiController.uploadFile)

export default router;