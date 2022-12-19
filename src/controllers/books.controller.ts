import express, {Request, Response} from "express";

export default class BookController {

    findAll = (req: Request, res: Response) => {
        res.json({"bla": "blo"});
    }
}

const routes = new BookController();
const app = express();
app.get('/all', routes.findAll);

// private routes = Router();
//
//     findAll = (req: Request, res: Response) => {
//         res.status(200).send([{'id': 1, 'name': 'Book'}]);
//         //         res.status(500).send({
//         //             message:
//         //                 err.message || "Some error occurred while retrieving tutorials."
//         //         });
//         //     });
//     };
// }

