import Users from "@/components/Users";

//Funcion que se ejecuta en el servidor
async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  
  return data.data;
}

async function UserPage() {

  const users = await fetchUsers();

  return (
    <Users users={users}/>  
  )
}

export default UserPage