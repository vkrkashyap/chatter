import { IRequest, IResponse } from "../type";

export class UserController {

    async singup(req: IRequest, res: IResponse) {

    }

    async login(req: IRequest, res: IResponse): Promise<IResponse> {
        return res.json("okay");
    }
}