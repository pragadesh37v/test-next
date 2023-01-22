import { useRouter } from "next/router"

function Id(){

    const router = useRouter()
    const id = router.query.id

    return(
        <h1>ID : {id}</h1>
    )
}

export default Id