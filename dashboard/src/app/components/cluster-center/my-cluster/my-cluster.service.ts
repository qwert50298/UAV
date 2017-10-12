import { Injectable } from '@angular/core';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { Http, Response } from '@angular/http';
import * as Const from '../../../config/const';

@Injectable()
export class ClusterService {
  constructor(public http: Http) { }

  public getInfo(json: any):Observable<any>{

    return this.http.get(Const.BACKEND_API_ROOT_URL + '/dashboard/clustercentre/clustermng/listclusters',{})
      .map((res: Response) => {
        return res.json();
      });
  }

}
