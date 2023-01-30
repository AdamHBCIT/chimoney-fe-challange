type Props = {
  children: React.ReactNode,
  clickClose: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({children, clickClose}: Props) => {
  return(
    <div className="fixed top-0 left-0 z-20 flex flex-row justify-center items-center w-screen h-screen backdrop-brightness-50">
      <div className="flex max-h-[90vh] w-[60vw] flex-col items-center overflow-hidden rounded-md bg-white p-6">
        {children}
        <button type="button" className="mt-8 btn-close" onClick={() => clickClose(false)}>Close</button>
      </div>
    </div>
  )
}
export default Modal;