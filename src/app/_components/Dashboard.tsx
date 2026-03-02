
import { Button } from "~/components/ui/button"
import DraftPost from "./DraftPost"
import Profile from "./Profile"
import Link from "next/link"

export default async function Dashboard() {

  return (
    <div className="flex flex-col gap-3 w-full">

    <div className="flex flex-col gap-1">
    <nav className="w-full">
      <Link href="/home">
      <Button className="bg-white hover:bg-white text-gray-400 rounded-none hover:cursor-pointer border-dotted border-r w-26 h-4">
        <span className="hover:scale-110">home</span>
      </Button>
    </Link>

    <Link href="/diary">
      <Button className="bg-white hover:bg-white text-gray-400 rounded-none hover:cursor-pointer border-dotted border-r w-26 h-4">
        <span className="hover:scale-110">diary</span>
      </Button>
    </Link>

    <Link href="/explore">
      <Button className="bg-white hover:bg-white text-gray-400 rounded-none hover:cursor-pointer border-dotted border-r w-26 h-4">
        <span className="hover:scale-110">explore</span>
      </Button>
    </Link>

    <Link href="/friends">
      <Button className="bg-white hover:bg-white text-gray-400 rounded-none hover:cursor-pointer border-dotted w-26 h-4">
        <span className="hover:scale-110">friends</span>
      </Button>
    </Link>
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