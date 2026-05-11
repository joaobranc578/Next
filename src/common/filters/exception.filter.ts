import { from } from "rxjs";
import {
    ArgumentHost, Catch, ExceptionFilter, HttpException, HttpStatus
} from "@nestjs/common";
import { Request, Response } from "express";
import path from "path";
import { timestamp } from "rxjs";

@Catch(HttpException)
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus
        const errorResponse = exception.getResponse();      
    }
}   