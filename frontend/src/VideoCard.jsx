import { useState } from "react";
import {BrowserRouter,Routes,Route,useNavigate,useLocation} from 'react-router-dom';
import axios from 'axios'


const VideoCard = ({video}) => {
    const [deleteChoice,setDeleteChoice] = useState(false);
    const navigate = useNavigate();

    function copyFunction() {
        navigator.clipboard.writeText(video.url);
        alert("Copied link to clipboard.");
    }

    const deleteButton = (e) => {
        setDeleteChoice(true);
        e.preventDefault();
        axios.delete(`http://localhost:5000/clip/${video._id}`)
        .then(res=> {
            window.location.reload();
        }).catch(err => console.log(err))
      }
      

    return (
        <div id="video" style={{display: deleteChoice ? 'none' : 'block' }}>
            {/* <h1>{video.name} </h1>
            <h1>{video.anime} </h1>
            <h1>{video.episode} </h1>
            <h1>{video.size} </h1> */}
            <div id="clipname">{video.name} </div>
            <div id="vidframe"><iframe width="420" height="250" src={video.url}> </iframe></div>
            <div id="details">{video.anime} Episode {video.episode} </div>
            <div id="cardButtons">
                <button id="copyLinkButton" onClick={copyFunction}>Copy Link</button>
                <button id="deleteButton" onClick={(e)=>deleteButton(e)}>Delete</button>
            </div>
        </div>  
      
    );
  }
  
  export default VideoCard;
  