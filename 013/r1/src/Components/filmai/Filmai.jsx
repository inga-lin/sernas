import { useEffect, useState } from "react";
import axios from 'axios';
import MovieList from "./MovieList";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Filmai(){


    const [users, setUsers] = useState([]);//movielist
    const [inputText, setInputText] = useState('');
    const [clickMove, setClickMove] = useState();//cia apsirasom kad kai paspaudziam filma ji viena atvaizduotu
    

    useEffect(() => {
      if (inputText.length > 2  ) { //nuo 3raidziu prades rodyti filma
        //per cia gaunam info apie filmus
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=13e0bada9ae6d703bc0c36703e5628fa&language=en-US&query=${inputText}`)
        .then(res => {
            console.log(res.data);
            setUsers(res.data.results);
            
        });
      }
    },[inputText]);

   const handeleImputChange = (e) => {
    const searchWord = e.target.value;
       setInputText(searchWord)
      //console.log(setInputText);

  const newFilter = setUsers.filter((value) => {
    return value.title.toLowerCase().includes(searchWord.toLowerCase());
  });
  
  if (searchWord === "") {
    setUsers([]);
  } else {
    setUsers(newFilter);
  }
};


//cia apsirasom kad kai paspaudziam filma ji viena atvaizduotu
const heandelSelect = (value) => {
  setClickMove(value)

}

//cia apsirasom kad kai paspaudziam filma ji viena atvaizduotu
const clearInput = () => {
  setUsers([]);
  setInputText("");
};
///////
////

    return (

        <>
            <div className="search">
                <div className="searchInputs">
                   <input type="text"  placeholder="filmu paieska" value={inputText} onChange={(e) => handeleImputChange(e)}>
                   </input>
                   <div className="searchIcon">
                     {users.length === 0 ? ( <SearchIcon></SearchIcon>) : (<CloseIcon id="clearBtn" onClick={clearInput} />)}
                   </div>
                   {/*<MovieList className="MovieList" filmai={users}></MovieList>*/}
                </div>
                {users.length !== 0 && (
                <div className="dataResult">
                {users.slice(0, 8).map((value) => {
                    return (
                    <div className="dataItem2" >
                    <li className="dataItem" onClick={() => heandelSelect(value) } filmai={users}>
                       <h3>{value.title} </h3>
                       <p>{value.vote_average} Rating, {value.release_date.substring(0,4)}</p>
                    </li>
                    </div>
                    );
                     })}
                </div>
                )}
                {/*//cia apsirasom kad kai paspaudziam filma ji viena atvaizduotu*/}
               {clickMove && <MovieList className="MovieList" filmas={clickMove}></MovieList>}
            </div> 
        </>
    )
}

export default Filmai;

// users.map(u => <img key={u.id} alt="aik" src={u.avatar}></img>)


/*
            {
                users.map((filmas) => <Filmas key={filmas.id} filmas={filmas}></Filmas> )
            }*/
//users.map((movie) => <p> {movie.title}</p>)



/*
const clearInput = () => {
    setUsers([]);
    setInputText("");
  };*/
/*
<div className="searchIcon">
{users.length === 0 ? (
  <SearchIcon />
) : (
  <CloseOutlinedIcon id="clearBtn" onClick={clearInput} />
)}
</div> */

/*
import { useEffect, useState } from "react";
import axios from 'axios';
import MovieList from "./MovieList";
//import Filmas from "./Filmas";
function Filmai(){


    const [users, setUsers] = useState([]);
    const [inputText, setInputText] = useState('car');
    

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=13e0bada9ae6d703bc0c36703e5628fa&language=en-US&query=${inputText}`)
        .then(res => {
            console.log(res.data);
            setUsers(res.data.results);
            
        })
    },[inputText]);

   const handeleImputChange = (e) => {
       setInputText(e.target.value)
  console.log(setInputText);
   }
  
    return (

        <>
          <input type="text"  placeholder="filmu paieska"  onChange={(e) => handeleImputChange(e)}>
          </input>
        
            
           <MovieList className="MovieList" filmai={users}></MovieList>
            

        
        </>
    )
}

export default Filmai;
*/

//<Filmas filmai={users} />