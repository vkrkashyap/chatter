import { IRequest, IResponse } from "../type";

export class AppController {

    async login(req: IRequest, res: IResponse): Promise<IResponse> {
        return res.send('<h1> Do Loigin </h1>')
    }

    async signup(req: IRequest, res: IResponse): Promise<IResponse> {
        return res.send("Signup");
    }

    async processLogin(req: IRequest, res: IResponse): Promise<IResponse> {
        return res.send("Login doing");
    }

    async processSignup(req: IRequest, res: IResponse): Promise<IResponse> {
        return res.send("Signup doing");
    }

    async logout(req: IRequest, res: IResponse): Promise<IResponse> {
        return res.send("Logout doing");
    }
}