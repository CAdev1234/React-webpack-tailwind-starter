import "./tailwind.css"

const App = () => {
  return (
    <div className="App bg-[#eee] h-[100vh] flex items-center justify-center flex-col">
      <h1 className="font-bold text-4xl text-[#333]">Hi 👋, Eden Hazard!</h1>
      <p className="text-sm font-italic font-semibold m-[3px] text-pink-500">
        Now you can use <code className="bg-[#ccc] p-[3px]">[]</code> to style
        your app
      </p>
    </div>
  )
}

export default App
