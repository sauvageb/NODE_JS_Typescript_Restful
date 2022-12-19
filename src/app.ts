import express, {Request, Response} from 'express';
import {booksRouter} from "./routes/books.route";

/**
 * App Variables
 */
const PORT: number = parseInt(process.env.PORT as string, 10) | 3000;
const app = express();

/**
 *  App Configuration
 */
// app.use(
//     cors({origin: '*'})
// );
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: 'Hello World'});
});

app.use("/api/books", booksRouter);


/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
