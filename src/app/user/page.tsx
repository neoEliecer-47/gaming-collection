
import Header from "@/components/Header";
import User from "@/components/icons/User";
import GamesCategories from "@/components/user/GamesCategories";
import { veryfyUser } from "@/server/actions";


const page = async ({ searchParams }: { searchParams: { query: string } }) => {
  const auth = await veryfyUser()

  if(auth.error){
    return <p>Unautorized. Please logIn first</p>
  }

  return (
    <div className="py-1 m-0 min-h-screen bg-gray-500 w-full">
     <Header searchParams={searchParams.query}/>
      <div className=" px-2 ">
        <section className="w-full h-[10rem] flex flex-col gap-2 mb-4 items-center justify-center bg-green-500">
          <User size={20} className="w-[9.5rem]" />
          <span className="text-lg font-bold">User 47</span>
        </section>
      
        <GamesCategories />
      </div>
    </div>
  );
};

export default page;
