
export default async function Profile() {

  return (
    <div>
    <div className="flex flex-col justify-center items-center gap-2 text-sm">
      <img className="w-30 h-30 outline p-2" src="/profilepic.jpg"></img>
      <div className="flex flex-col gap-2 py-2">
        <p>名: qiandai</p>
        <hr></hr>
        <p>last dream: 2 days ago</p>
        <hr></hr>
        <p>last visited: now</p>
      </div>
    </div>
  </div>
  )
}