import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class ManageRootPageService {

    private eventEmitter = new EventEmitter<MyRootPage>();

    /**
     * Changes root page to given page
     * @param page 
     */
    changeRootPage(page: MyRootPage): void {
        this.eventEmitter.emit(page);
    }

    /**
     * Gives root page event emitter.
     */
    getEventEmitter(): EventEmitter<MyRootPage> {
        return this.eventEmitter;
    }
}