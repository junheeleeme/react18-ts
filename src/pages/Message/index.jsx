import { useCallback } from 'react'
import message from 'Utils/message'

const Message = () => {
  const clickSuccess = useCallback(() => {
    message.success('성공입니다.')
  }, [])
  const clickFail = useCallback(() => {
    message.error('에러입니다.')
  }, [])
  const clickWarn = useCallback(() => {
    message.warn('경고입니다.')
  }, [])
  const clickInfo = useCallback(() => {
    message.info('아무것도 아닙니다.')
  }, [])

  return (
    <section>
      <h2>Message Usage</h2>
      <br />
      <button type="button" className="md" onClick={clickSuccess}>
        Success
      </button>
      <button type="button" className="md" onClick={clickFail}>
        Fail
      </button>
      <button type="button" className="md" onClick={clickWarn}>
        warnning
      </button>
      <button type="button" className="md" onClick={clickInfo}>
        Info
      </button>
    </section>
  )
}

export default Message
