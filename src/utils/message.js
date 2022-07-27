import { toast } from 'react-toastify'

const option = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: true,
}

const message = {
  success(msg = 'success', autoClose, position) {
    if (autoClose) option.autoClose = autoClose
    if (position) option.position = position
    toast.success(msg, option)
  },
  error(msg = 'error', autoClose, position) {
    if (autoClose) option.autoClose = autoClose
    if (position) option.position = position
    toast.error(msg, option)
  },
  warn(msg = 'warnning', autoClose, position) {
    if (autoClose) option.autoClose = autoClose
    if (position) option.position = position
    toast.warn(msg, option)
  },
  info(msg = 'info', autoClose, position) {
    if (autoClose) option.autoClose = autoClose
    if (position) option.position = position
    toast.info(msg, option)
  },
}

export default message
