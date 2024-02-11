import { NextFunction } from "express";
import { IRequest, IResponse } from "../type";

export enum HTTTPVerbs {
    GET,
    POST,
    PUT,
    PATCH,
    DELETE
}

export type Router = {
    path: string,
    method: HTTTPVerbs,
    middleware: Middleware[],
    controller: Controller
}

export type Controller = (request: IRequest, response: IResponse) => Promise<IResponse>;
export type Middleware = (request: IRequest, response: IResponse,
    nextFunction: NextFunction, ...params: any) => Promise<IResponse | NextFunction | undefined>;