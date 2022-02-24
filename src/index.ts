import express, { Request, Response } from "express";
import { carService } from "./services/car-services";

const app = express()
app.use(express.json())

app.get('/cars', async (req: Request, res: Response) => {
    const result = await carService.getAllCars()

    if(!result){
        res.status(500).send('Something went wrong')}
        res.status(200).json(result)
})

const port = 3450;

app.listen(port, () =>{
    console.log (`We be listening on port ${port}`)
})
