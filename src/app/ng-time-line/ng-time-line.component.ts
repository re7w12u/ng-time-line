import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../order.service';
import { OrderModel } from '../models/order.model';
import { Observable } from 'rxjs/Observable';

import { VisTimelineService, VisTimelineItems, VisTimelineGroups } from 'ng2-vis';

@Component({
    selector: 'app-ng-time-line',
    templateUrl: './ng-time-line.component.html',
    styleUrls: ['./ng-time-line.component.css']
})
export class NgTimeLineComponent implements OnInit, OnDestroy {

    public visTimeline: string = 'timelineId1';
    public visTimelineItems: VisTimelineItems;
    public visTimelineGroups: VisTimelineGroups;

    public constructor(private visTimelineService: VisTimelineService,
        private orderService: OrderService) { }


    public ngOnInit(): void {

        this.orderService.getAllOrders().subscribe(function (d) {
            
            this.rows = d;
            this.originalData = d;
            
             var groups = [];
            var timelineData=[];
            this.rows.forEach(function (x) {                
                var name = x.Name;
                var exists = groups.find(function (value, index, obj) { return value.id == x.Group; });
                if (exists == undefined) {
                    groups.push({ id: x.Group, content: name });
                }

                timelineData.push({ id: x.id,
                group: x.Group,
                content: x.content,
                start: x.StartDate,
                end: x.ActualEndDate,
                style: x.Style});
            });

            this.visTimelineGroups = new VisTimelineGroups(groups);
            this.visTimelineItems = new VisTimelineItems(timelineData);
        }.bind(this));
    }

    public timelineInitialized(): void {
        console.log('timeline initialized');

        // now we can use the service to register on events
        this.visTimelineService.on(this.visTimeline, 'click');

        // open your console/dev tools to see the click params
        this.visTimelineService.click
            .subscribe((eventData: any[]) => {
                if (eventData[0] === this.visTimeline) {
                    console.log(eventData[1]);
                }
            });
    }

    public addItem(): void {
        const newLength = this.visTimelineItems.getLength() + 1;
        this.visTimelineItems.add(
            { id: newLength, content: 'item ' + newLength, start: Date.now() }
        );
        this.visTimelineService.focusOnIds(this.visTimeline, [1, newLength]);
    }



    public ngOnDestroy(): void {
        this.visTimelineService.off(this.visTimeline, 'click');
    }

   

}
