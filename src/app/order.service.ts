import { Injectable } from '@angular/core';

import { OrderModel } from './models/order.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

@Injectable()
export class OrderService {

  constructor() { }

  public getAllOrders() : Observable<Array<OrderModel>>{

    let data:Array<OrderModel> = new Array<OrderModel>();

    data.push(new OrderModel({ id: 18, name: 'Jean-Charles PENTAGORA', content: '100% | <span style="font-size:smaller;">01/03/2017 - 01/06/2017</span>', start: "2017-03-01T09:00:00", end: "2017-06-01T09:00:00", style: "background-color: #f4d306; color:#000", group: "0", test: "" }));

    data.push(new OrderModel({ id: 19, name: 'Jean-Charles PENTAGORA', content: '100% | <span style="font-size:smaller;">01/03/2017 - 01/06/2017</span>', start: "2017-03-01T09:00:00", end: "2017-06-01T09:00:00", style: "background-color: #f4d306; color:#000", group: "0", test: "" }, ));

    data.push(new OrderModel({ id: 25, name: 'Julien BESSIERE', content: '100% | <span style="font-size:smaller;">29/06/2017 - 27/07/2017</span>', start: "2017-06-29T22:00:00", end: "2017-07-27T22:00:00", style: "background-color: #142284; color:#fff", group: "1" }));

    data.push(new OrderModel({ id: 31, name: 'Henri BOURGEAT ', content: '100% | <span style="font-size:smaller;">05/05/2017 - 06/06/2017</span>', start: "2017-05-05T22:00:00", end: "2017-06-06T22:00:00", style: "background-color: #1e4164; color:#fff", group: "2" }));

    data.push(new OrderModel({ id: 32, name: 'Alban MOREAU', content: '100% | <span style="font-size:smaller;">08/09/2017 - 10/11/2017</span>', start: "2017-09-08T00:00:00", end: "2017-11-10T00:00:00", style: "background-color: #ce1404; color:#fff", group: "3" }));

    data.push(new OrderModel({ id: 33, name: 'Jean-Charles PENTAGORA', content: '100% | <span style="font-size:smaller;">03/09/2017 - 06/11/2017</span>', start: "2017-09-03T00:00:00", end: "2017-11-06T00:00:00", style: "background-color: #f4d306; color:#000", group: "0" }));

    data.push(new OrderModel({ id: 44, name: 'Thomas BADIN', content: '0% | <span style="font-size:smaller;">16/12/2017 - 16/01/2018</span>', start: "2017-12-16T22:00:00", end: "2018-01-16T22:00:00", style: "background-color: #1038d3; color:#fff", group: "6" }));


    return Observable.of(data);

  }


}
