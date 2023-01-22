import { useRouter } from "next/router"

function spage(){

    const router = useRouter()
    const id = router.query.id

    return(
        <h1>spage : {id}</h1>
    )
}

export default spage