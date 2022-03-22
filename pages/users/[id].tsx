
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const User:NextPage=()=>{
    const router=useRouter()
    return (
        <div>
            {router.query.id}
            User
        </div>
    )
}


export default User;