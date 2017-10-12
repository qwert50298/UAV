import { Injectable } from '@angular/core';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { Http, Response } from '@angular/http';
import * as Const from '../../../config/const';

@Injectable()
export class ConfigManagerService {
  constructor(public http: Http) { }

  public getInfo(json: any):Observable<any>{

    return this.http.get(Const.BACKEND_API_ROOT_URL + '/dashboard/clustercentre/configmng/listconfigs',{})
      .map((res: Response) => {
        return res.json();
      });
  }

}
