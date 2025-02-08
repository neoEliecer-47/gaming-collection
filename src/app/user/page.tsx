
import Header from "@/components/Header";
import User from "@/components/icons/User";
import GamesCategories from "@/components/user/GamesCategories";


const page = async ({ searchParams }: { searchParams: { query: string } }) => {


  return (
    <>
     <Header searchParams={searchParams.query}/>
      <div className="px-2 bg-gray-500 w-full min-h-screen">
        <section className="w-full h-[10rem] flex flex-col gap-2 mb-4 items-center justify-center bg-green-500">
          <User size={20} className="w-[9.5rem]" />
          <span className="text-lg font-bold">User 47</span>
        </section>
      
        <GamesCategories />
      </div>
    </>
  );
};

export default page;
