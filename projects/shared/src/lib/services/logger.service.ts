import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // makes it available app-wide without manual module imports
})
export class LoggerService {
  log(message: string) {
    console.log(`[LoggerService] ${message}`);
  }
}