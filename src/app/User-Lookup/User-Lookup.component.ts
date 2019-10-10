import { Component, OnInit, ViewChild } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-User-Lookup',
  templateUrl: './User-Lookup.component.html',
  styleUrls: ['./User-Lookup.component.css']
})
export class UserLookupComponent implements OnInit {
  faUserPlus = faUserPlus;

  displayedColumns: string[] = [ 'position','firstname', 'lastname', 'email', 'userGroup', 'status' , 'action' ];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  // title = 'app';

  //   columnDefs = [
  //       {headerName: 'First Name', field: 'firstname',sortable: true, filter: true },
  //       {headerName: 'Last Name', field: 'lastname',sortable: true, filter: true },
  //       {headerName: 'Email', field: 'email',sortable: true, filter: true},
  //       {headerName: 'User Group', field: 'usergroup',sortable: true, filter: true},
  //       {headerName: 'Status', field: 'status',sortable: true, filter: true},
  //       {headerName: 'Action', field: 'action',sortable: true, filter: true}
  //   ];



  //   rowData: any;

    constructor(private http: HttpClient) {

    }

  ngOnInit() {

    // this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
    this.dataSource.paginator = this.paginator;
  }



}

export interface UserData {
  position: number;
  firstname: string;
  lastname: string;
  email: string;
  userGroup : string;
  status: string;
  action: string;

}

const ELEMENT_DATA: UserData[] = [
  {position: 1, firstname: 'Chamath', lastname: 'Ranaweera', email: 'H', userGroup: 'Top', status: 'Active', action: 'Edit'},




];
