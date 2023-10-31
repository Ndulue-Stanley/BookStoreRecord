import { Request, Response } from "express";
import { statusCode } from "../utils/statusCode";
import { client, db } from "../utils/dbConfig";
import { bookModel } from "../model/bookModel";
import { ObjectId } from "mongodb";

export const createBook = async (req: Request, res: Response) => {
    try {                                                             
        await client.connect()
        const { title, author, category, numberOfPages,  interesting,  description } = req.body;

        const book = new bookModel(title, author, category, numberOfPages, interesting, description)
        await db.insertOne(book);
        // console.log(req.body);
        
        return res.status(statusCode.CREATED).json({
            message: 'book created',
            data: book
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}
export const readBook = async (req: Request, res: Response) => {
    try {
        await client.connect()

        const book = await db.find().toArray()

        return res.status(statusCode.OK).json({
            message: 'book found',
            data: book
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}
export const readBooksbyID = async (req: Request, res: Response) => {
    try {
        await client.connect()
        const { bookID } = req.params

        const book = await db.findOne({ _id: new ObjectId(bookID) })

        return res.status(statusCode.OK).json({
            message: 'book found by ID',
            data: book
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}
export const readBooksbyCategory = async (req: Request, res: Response) => {
    try {
        await client.connect()
        const { category } = req.body

        const book = await db.find({ category }).toArray()

        return res.status(statusCode.OK).json({
            message: 'book found by category',
            data: book
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}
export const updateBook = async (req: Request, res: Response) => {
    try {
        await client.connect()
        const { bookID } = req.params
        const { title } = req.body

        const book = await db.updateOne({ _id: new ObjectId(bookID) }, { $set: { title } });

        return res.status(statusCode.OK).json({
            message: 'book updated',
            data: book
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}
export const deleteBook = async (req: Request, res: Response) => {
    try {
        await client.connect()
        const { bookID } = req.params

        await db.deleteOne({ _id: new ObjectId(bookID) })

        return res.status(statusCode.OK).json({
            message: 'book deleted',
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}

