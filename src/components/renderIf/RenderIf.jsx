const RenderIf = (props) => {
  const { children, isTrue } = props
  return (
    <>
      {isTrue ? children : null }
    </>
  )
}
export default RenderIf
