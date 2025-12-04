import { Component, OnInit } from '@angular/core';
import { GDPEntry } from '../../../core/models/gdp-entry.model';
import { EurostatService } from '../../../core/services/eurostat.service';
import { combineLatest } from 'rxjs';
import {TableModule} from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ProgressSpinner } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gdp-list',
  imports: [TableModule, CommonModule, ProgressSpinner, CardModule, AutoCompleteModule, FormsModule],
  templateUrl: './gdp-list.html',
  styleUrl: './gdp-list.scss',
})
export class GdpListComponent implements OnInit {
  data: GDPEntry[] = [];
  loading = false;
  items: { label: string; value: string }[] = [];


  sources = [
    { label: 'EUROSTAT', value: 'estat' },
    { label: 'AMECO', value: 'ameco' },
    { label: 'Both', value: 'both' },
  ];

  selectedSource: { label: string; value: string } | undefined = this.sources[0];

  constructor(private eurostat: EurostatService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;

    if (this.selectedSource?.value === 'estat') {
      this.eurostat.getGDP().subscribe((d) => {
        this.data = d;
        this.loading = false;
      });
    } else if (this.selectedSource?.value === 'ameco') {
      alert('Cannot access to AMECO. WIP');
      this.loading = false;
    } 
    // else {
    //   combineLatest([this.eurostat.getGDP(), this.ameco.getGDP()]).subscribe(([e, a]) => {
    //     this.data = [...e, ...a];
    //     this.loading = false;
    //   });
    // }
  }
  search(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase(); 
    this.items = this.sources.filter(source =>
      source.label.toLowerCase().includes(query) 
    );
  }

}
