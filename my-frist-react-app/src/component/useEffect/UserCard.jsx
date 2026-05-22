export default function UserCard({user}){
    return(
        <div className="border p-5 rounded-xl">
            <h1 className="text-4xl font-bold">{user.name}</h1>
            <div className="flex justify-between gap-4">
                <p className="text-sm text-gray-500 ">{user.email}</p>
                <p className="text-sm text-gray-500 ">{user.phone}</p>
            </div>
        </div>
    )
}