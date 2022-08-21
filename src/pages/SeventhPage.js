import Navigation from '../components/Navigation'
import OpenEndedQuestionField from '../components/OpenEndedQuestionField'

const SeventhPage = () => {
  return (
    <>
      <section className="flex flex-col py-4 bg-[#f1f2f3] h-screen w-screen justify-evenly">
        <div className="flex flex-col self-center gap-y-28">
          <div className="self-center container h-40 w-80 p-12 rounded-3xl border-2 border-orange-400 bg-white drop-shadow-xl">
            <h1 className={'text-center font-sans'}>7th question...</h1>
          </div>
          <div className="container">
            <div
              className={`w-96 flex justify-center items-center h-20 p-2 rounded-xl bg-white drop-shadow-xl cursor-pointer`}
            >
              <OpenEndedQuestionField />
            </div>
          </div>
        </div>
      </section>
      <Navigation back={'6'} forward={'8'} />
    </>
  )
}

export default SeventhPage
