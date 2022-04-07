import { useEffect, useState } from "react";//1
import axios from 'axios';//1
import PostTitle from "./PostTitle";
function Post(){//1


    const [post, setPost] = useState([]);//1
    


    useEffect(() => {//1

        axios.get('https://jsonplaceholder.typicode.com/posts')//1
        .then(res => { //1
            console.log(res.data);//1
            setPost(res.data);//1. taip atvaizduos paprastai tuos title, eiles tvarka
            //setPost(res.data.sort((a, b) => b.title.length - a.title.length));//2 taip atvaizduos nuo didziausio iki maziausio pavadinimo ilgio
        })
    },[]);
  
    return (//1
        <ul>
            {
                post.map(u => <PostTitle key={u.id} post={u}></PostTitle>)//1
            }
        </ul>
    )
}

export default Post;//1

//1.Parašyti komponentą Posts, kuris atvaizduoja postų pavadinimus DONE!
//2.Tvarka title turi būti - ilgiausi title turi būti pradžioje DONE!