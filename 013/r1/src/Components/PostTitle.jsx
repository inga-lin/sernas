function PostTitle({post}) {


    if (post.title.length < 20) {
        return (
            <li style={{color:'red'}}>
                {post.title}
                <p style={{color:'gray',fontSize: '8px'}}>{post.body}</p>
            </li>
        )
    }
    return (
        <li>
            {post.title}
        </li>
    )


}

export default PostTitle;
//3.padaryti, kad trumpesni nei 20 raidžių title būtų raudoni DONE!
//4.Šalia raudonų, atvaizduoti ir visą post body DONE!
//