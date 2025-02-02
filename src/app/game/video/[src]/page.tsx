

 function page ({ params }: {params: { src: string }}){
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
          <video src={decodeURIComponent(params.src)} className="w-full max-w-4xl" controls autoPlay />
      </div>
    )
  }

export default page
  