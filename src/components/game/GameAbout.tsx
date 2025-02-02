const GameAbout = ({ description }: { description: string }) => {
  return (
    <div className="w-full h-[20rem] overflow-hidden">
      <h1 className="text-white">About</h1>
      <div
        className="text-white"
        dangerouslySetInnerHTML={{ __html: description.slice(0, 50) }}
      />
      
    </div>
  );
};

export default GameAbout;
