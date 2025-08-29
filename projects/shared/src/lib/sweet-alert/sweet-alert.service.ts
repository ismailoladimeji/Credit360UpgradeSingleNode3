import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import { DEFAULT_SWEET_ALERT_CONFIG } from './sweet-alert.config';

@Injectable({ providedIn: 'root' })
export class SweetAlertService {
  private base = DEFAULT_SWEET_ALERT_CONFIG.base;

  fire(options: SweetAlertOptions): Promise<SweetAlertResult<any>> {
    const mergedOptions = { ...this.base, ...options };
    return Swal.fire(mergedOptions as SweetAlertOptions);
  }

  success(text: string, title = 'Success') {
    return this.fire({
      title,
      text,
      icon: 'success',
      customClass: { confirmButton: 'swal-confirm', cancelButton: 'swal-cancel' }
    });
  }

  error(text: string, title = 'Error') {
    return this.fire({
      title,
      text,
      icon: 'error',
      customClass: { confirmButton: 'swal-confirm', cancelButton: 'swal-cancel' }
    });
  }

  info(text: string, title = 'Info') {
    return this.fire({
      title,
      text,
      icon: 'info',
      customClass: { confirmButton: 'swal-confirm', cancelButton: 'swal-cancel' }
    });
  }

  warning(text: string, title = 'Warning') {
    return this.fire({
      title,
      text,
      icon: 'warning',
      customClass: { confirmButton: 'swal-confirm', cancelButton: 'swal-cancel' }
    });
  }

  /**
   * Confirmation dialog; returns true if user confirmed.
   */
  async confirm(options?: {
    title?: string;
    text?: string;
    confirmText?: string;
    cancelText?: string;
    icon?: SweetAlertIcon;
  }): Promise<boolean> {
    const {
      title = 'Are you sure?',
      text = 'You won’t be able to undo this.',
      confirmText = 'Yes, continue',
      cancelText = 'No, cancel',
      icon = 'warning'
    } = options || {};

    const res = await this.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      customClass: { confirmButton: 'swal-confirm', cancelButton: 'swal-cancel' }
    });

    return !!res.isConfirmed;
  }

  /**
   * Toast style notification (top-right).
   */
  toast(message: string, icon: SweetAlertIcon = 'success', timer = 3000) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer,
      timerProgressBar: true,
    });
    return Toast.fire({ icon, title: message });
  }
}
