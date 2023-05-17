import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: any;
  }
}

@Injectable({
  providedIn: 'root',
})
export class MetamaskService {
  constructor(private http: HttpClient) {}

  createInstance() {
    const provider = new Web3.providers.HttpProvider(environment.clientUrl);
    const web3 = new Web3(provider);
  }

  checkConnect() {
    if (typeof window.ethereum !== 'undefined') {
      return false;
    } else {
      return true;
    }
  }
}
