
import { Card, CardContent } from "~/components/ui/card"
import Dashboard from "../_components/Dashboard"


export default async function HomePage() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center flex-col text-gray-700">
        <div className="w-[60%] h-screen flex justify-center items-center flex-col text-gray-700 gap-6">

          <div className="flex bg-gray-100 px-5 p-1 w-full justify-between">
            <p>
              this is the header
            </p>

            <div className="underline flex gap-2">
              <a className="underline hover:cursor-pointer">help</a>
              <p> | </p>
              <a className="underline hover:cursor-pointer">give feedback</a>
              <p> | </p>
              <a href="/api/auth/signout" className="underline hover:cursor-pointer">exit</a>
            </div>
          </div>


          <Card className="w-full p-0">
            <CardContent className="flex items-center justify-center w-full p-0 m-0 h-50 overflow-hidden">
              <img src="/header.jpg" className=" w-full h-full object-cover rounded-md"></img>
            </CardContent>
          </Card>


          <Dashboard></Dashboard>



        </div>
      </div>
    </>
  )
}