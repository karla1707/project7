export class Response<T> {
    status_code: number;
    is_error: boolean;
    data: T;
}