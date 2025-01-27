import GamesList from "@/components/GamesList"


const page = ({ params }: {params: { page: string }}) => {

    const currentPage = parseInt(params.page, 10) || 1
  return (
    <GamesList currentPage={currentPage} />
  )
}

export default page