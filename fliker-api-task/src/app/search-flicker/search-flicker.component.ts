import { FlickerService } from './../service/flicker.service';
import { FlickerPhoto } from './../models/search-flicker.model';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'search-flicker',
  templateUrl: './search-flicker.component.html',
  styleUrls: ['./search-flicker.component.scss'],
})
export class SearchFlickerComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  searchForm: FormGroup = this.fb.group({
    search: '',
  });
  pageIndex!: number;
  searchText!: string;
  perPage:number=15

  @Input() set page(value: number) {
    if (value) {
      this.pageIndex = value;
      if (this.searchText) this.searchImage(this.searchText, this.pageIndex);
    }
  }
  @Output() searchResult: EventEmitter<FlickerPhoto[]> = new EventEmitter();
  constructor(
    private flickerService: FlickerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe((value) => {
        if (value.search) {
          this.searchText = value.search;
          this.searchImage(value.search, this.page);
        } else {
          this.searchResult.emit([]);
        }
      });
  }

  searchImage(searchText: string, page:number): void {
    this.flickerService
      .searchImage(searchText, page,this.perPage)
      .subscribe((value: FlickerPhoto[]) => {
        this.searchResult.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
