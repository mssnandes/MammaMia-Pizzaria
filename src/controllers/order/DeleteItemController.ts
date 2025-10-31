import { Request, Response } from "express";
import { DeleteItemService } from "../../services/order/DeleteItemService";

class DeleteItemController{
    async handle(req: Request, res: Response){
        const item_id = req.query.item_id as string
        const deleteItemService = new DeleteItemService();
        const order = await deleteItemService.execute({
            item_id
        })
        res.json(order)
    }
}

export {DeleteItemController}