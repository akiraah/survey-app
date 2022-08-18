import NavButton from './NavButton'

const Navigation = ({ back, forward }) => {
  return (
    <div className="flex flex-row justify-center gap-96 p-12 bg-[#f1f2f3] ml-2">
      <NavButton direction={'back'} navUrl={back} />
      <NavButton direction={'next'} navUrl={forward} />
    </div>
  )
}

export default Navigation
