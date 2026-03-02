
import { Button } from "~/components/ui/button"
import DraftPost from "./DraftPost"
import Profile from "./Profile"

export default async function Dashboard() {

  return (
    <div className="flex flex-col gap-3 w-full">

    <div className="flex flex-col gap-1">
    <nav className="w-full">
      <Button className="bg-white hover:bg-white text-gray-400 rounded-none hover:cursor-pointer border-dotted border-r w-26 h-4">home</Button>
      <Button className="bg-white hover:bg-white text-gray-400 rounded-none hover:cursor-pointer border-dotted border-r w-26 h-4">diary</Button>
      <Button className="bg-white hover:bg-white text-gray-400 rounded-none hover:cursor-pointer border-dotted border-r w-26 h-4">explore</Button>
      <Button className="bg-white hover:bg-white text-gray-400 rounded-none hover:cursor-pointer border-dotted border-r w-26 h-4">friends</Button>
    </nav>

    <hr className="border-t border-dotted border-gray-300"></hr>

    </div>
    <div className="flex gap-4 mt-3">

      
      <Profile></Profile>    
      <DraftPost></DraftPost>
    
    </div>
    </div>
  )
}