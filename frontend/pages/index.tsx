import axios from "axios";

export default function Home({postData}:any) {
    console.log('Data: '+getData())
    console.log('postData: '+JSON.stringify(postData))
    return (
        <>
        </>
    )
}

async function getData(){
    try {
        const {data} = await axios.get<any>('https://jsonplaceholder.typicode.com/posts?_limit=3'
        )
        console.log('Inside getData: '+JSON.stringify(await data, null, 4))
    }catch (error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export async function getStaticProps() {
    const postData = await getData()

    return {
        props: {postData}
    }
}