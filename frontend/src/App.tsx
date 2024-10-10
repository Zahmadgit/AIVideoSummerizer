
function App() {
 

  return (
    <>
      <main className="max-w-2xl mx-auto flex px-4"> 
        <div className="py-8">
          <h1 className="text-4xl font-bold uppercase bg-gradient-to-tr from-slate-600 to-sky-400 bg-clip-text text-transparent">
            Generate a video using AI
          </h1>
          <form className="border-2 rounded-full flex overflow-hidden">
            <input className="bg-transparent text-white px-4 grow" type="url" placeholder="https://..."/>
            <button 
              className="bg-white text-black px-4"
              type="submit">
                CREATE&nbsp;VIDEO
            </button>
          </form>
        </div>

        <div className="p-8">
            <div className="bg-gray-200 w-[240px] h-[380px] text-gray-500 rounded-2xl p-4">
              Video Here
            </div>
        </div>
      </main>
    </>
  )
}

export default App
