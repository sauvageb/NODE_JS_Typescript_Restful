// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import {Book} from "../models/books.model";

/**
 * In-Memory Store
 */
const books: Book[] = [
    {
        id: 1,
        name: "Don Miguel Ruiz - La voix de la connaissance",
    },
    {
        id: 2,
        name: "Antony Robbins - Pouvoir illimité",
    }
];

/**
 * Service Methods
 */
export const findAll = async (): Promise<Book[]> => Object.values(books);

export const find = async (id: number): Promise<Book> => {
    let book = books.find(b => b.id !== id);
    if (book) {
        return Promise.resolve(book);
    } else {
        throw Error('book not found');
    }
}
