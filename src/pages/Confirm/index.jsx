import confirm from 'Utils/confirm'

const Confirm = () => {
  const title = '제목'
  const content = '스타일은 무시하죠.. 결과는 콘솔에 찎힙니다.'
  const success = (res) => {
    console.log(res)
  }

  return (
    <section>
      <h2>Confirm Usage</h2>
      <button type="button" className="md" onClick={() => confirm(title, content, success)}>
        Confirm
      </button>
    </section>
  )
}

export default Confirm
