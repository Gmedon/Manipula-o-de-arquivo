import { Request, Response } from 'express';
import sharp from "sharp"
import { unlink } from "fs/promises"


export const uploadFile = async (req: Request, res: Response) => {
    if(req.file){
        await sharp(req.file.path)
        .resize(500, 500, {
            fit: sharp.fit.cover,
            position: 'bottom'
        })
        .toFormat('jpeg')
        .toFile(`./public/midia/${req.file.filename}.jpg`);

        await unlink(req.file.path)

        res.json({image: req.file.filename})
    }else {
        res.status(400);
        res.json({error: "Envie o arquivo"})
    }
}