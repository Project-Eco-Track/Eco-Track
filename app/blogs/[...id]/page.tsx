
type Params = {
  params:{
    id: string
    username: string
    blogname: string
  }
}
const page = ({params: {id, username, blogname}}:Params) => {
  return (
    <div className="text-white">
      {id} {username} {blogname}
    </div>
  )
}

export default page
