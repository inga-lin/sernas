function PostTitle({post}) {


    if (post.title.length < 20) { //{/*3.padaryti, kad trumpesni nei 20 raidžių title būtų raudoni*/}
        return (
            <li style={{color:'red'}}>{/*3.padaryti, kad trumpesni nei 20 raidžių title būtų raudoni*/}
                {post.title}
                <p style={{color:'green',fontSize: '8px'}}>{post.body}</p> {/*4.Šalia raudonų, atvaizduoti ir visą post body*/}
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