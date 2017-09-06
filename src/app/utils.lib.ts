import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

    baseUri : string;

    constructor(private http: Http) {

    }

    get(uri : string = this.baseUri, data : any = false, options : RequestOptions = this.getOption()): Promise<any> {
        if(data)
            options = this.getOption(data);
        return this.http.get(uri, options)
            .toPromise()
            .then(this.handlSuccess)
            .catch(this.handleError);
    }

    post(uri : string = this.baseUri, data : any = {}, options : RequestOptions = this.getOption()): Promise<any> {
        return this.http.post(uri, data, options)
            .toPromise()
            .then(this.handlSuccess)
            .catch(this.handleError);
    }

    put(uri : string = this.baseUri, data : any = {}, options : RequestOptions = this.getOption()): Promise<any> {
        return this.http.put(uri, data, options)
            .toPromise()
            .then(this.handlSuccess)
            .catch(this.handleError);
    }

    delete(uri : string = this.baseUri, data : any = false, options : RequestOptions = this.getOption()): Promise<any> {
        if(data)
            options = this.getOption(data);
        return this.http.delete(uri, options)
            .toPromise()
            .then(this.handlSuccess)
            .catch(this.handleError);
    }

    private getOption(data : any = false): RequestOptions {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        if(data)
            return new RequestOptions({ headers : headers, search : data })
        return new RequestOptions({ headers : headers });
    }

    private handlSuccess(res){
        return res.json();
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}

@Injectable()
export class Utils {

    public static setDataOption(data: Object, options: RequestOptions): RequestOptions {
        let params: URLSearchParams = new URLSearchParams();
        Object.keys(data).some(prob => {
            options.search.set(prob, data[prob]);
            return false;
        });
        return options;
    }

    public static objToURLSearchParams(data : Object):URLSearchParams {
        let params: URLSearchParams = new URLSearchParams();
        Object.keys(data).some(prob => {
            params.set(prob, data[prob]);
            return false;
        });
        return params;
    }

    public static objToFormData(data : Object):FormData {
        let body = new FormData();
        Object.keys(data).some(prob => {
            body.append(prob, data[prob]);
            return false;
        });
        return body;
    }
}