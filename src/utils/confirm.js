import { confirmAlert } from 'react-confirm-alert'

const options = {
  title: 'Confirm Title',
  message: 'Confirm Message',
  buttons: [
    {
      label: '예',
      onClick: () => {},
    },
    {
      label: '아니요',
      onClick: () => {},
    },
  ],
  closeOnEscape: true,
  closeOnClickOutside: true,
  keyCodeForClose: [8, 32],
  willUnmount: () => {},
  afterClose: () => {},
  onClickOutside: () => {},
  onKeypress: () => {},
  onKeypressEscape: () => {},
  overlayClassName: 'overlay-custom-class-name',
}

const confirm = (title = '', message = '', callback) => {
  if (callback !== undefined) {
    if (title !== '') options.title = title
    if (message !== '') options.message = message
    options.buttons.splice(0)
    options.buttons.push({
      label: '예',
      onClick: () => callback(true),
    })
    options.buttons.push({
      label: '아니요',
      onClick: () => callback(false),
    })
    confirmAlert(options)
  } else {
    console.error('Need callback function!!!')
  }
}

export default confirm
