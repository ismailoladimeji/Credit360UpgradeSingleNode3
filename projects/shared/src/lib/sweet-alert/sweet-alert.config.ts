import type { SweetAlertOptions } from 'sweetalert2';

export interface AppSweetAlertConfig {
  base: SweetAlertOptions;
  confirmText: string;
  cancelText: string;
}

export const DEFAULT_SWEET_ALERT_CONFIG: AppSweetAlertConfig = {
  base: {
    buttonsStyling: false,          // let our CSS classes style buttons
    allowOutsideClick: false,
    allowEscapeKey: true,
    showCloseButton: true,
    reverseButtons: true,
    focusCancel: true,
    // feel free to tweak:
    // backdrop: true,
  },
  confirmText: 'OK',
  cancelText: 'Cancel',
};
