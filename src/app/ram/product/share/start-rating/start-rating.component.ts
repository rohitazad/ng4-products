import { Component, OnChanges, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.css']
})
export class StartRatingComponent implements OnChanges {
  @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
            new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

}
