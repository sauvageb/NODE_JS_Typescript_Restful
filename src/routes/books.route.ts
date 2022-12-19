/**
 * Required External Modules and Interfaces
 */
import express, {Request, Response} from "express";
import {Book} from "../models/books.model";
import * as BookService from "../services/books.service";


/**
 * Router Definition
 */
export const booksRouter = express.Router();

/**
 * Controller Definitions
 */

// GET books
booksRouter.get("/", async (req: Request, res: Response) => {
    try {
        const items: Book[] = await BookService.findAll();

        res.status(200).send(items);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});


/// GET items/:id
//
booksRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    try {
        const book: Book = await BookService.find(id);
        return res.status(200).send(book);
    } catch (e) {
        const typedError = e as Error;
        res.status(404).send(typedError?.message);
    }
});

//
// // POST items
//
// booksRouter.post("/", async (req: Request, res: Response) => {
//     try {
//         const item: BaseItem = req.body;
//
//         const newItem = await ItemService.create(item);
//
//         res.status(201).json(newItem);
//     } catch (e) {
//         res.status(500).send(e.message);
//     }
// });
//
// // PUT items/:id
//
// booksRouter.put("/:id", async (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id, 10);
//
//     try {
//         const itemUpdate: Item = req.body;
//
//         const existingItem: Item = await ItemService.find(id);
//
//         if (existingItem) {
//             const updatedItem = await ItemService.update(id, itemUpdate);
//             return res.status(200).json(updatedItem);
//         }
//
//         const newItem = await ItemService.create(itemUpdate);
//
//         res.status(201).json(newItem);
//     } catch (e) {
//         res.status(500).send(e.message);
//     }
// });
//
// // DELETE items/:id
// booksRouter.delete("/:id", async (req: Request, res: Response) => {
//     try {
//         const id: number = parseInt(req.params.id, 10);
//         await ItemService.remove(id);
//
//         res.sendStatus(204);
//     } catch (e) {
//         res.status(500).send(e.message);
//     }
// });
