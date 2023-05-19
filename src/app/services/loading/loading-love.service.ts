import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingLoveService {

  isLoading: boolean = false;
  constructor() { }
}
