import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "./components";



const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor:'#000'}}>
        <Navbar/>
        <Routes>
            <Route exact path="/" element= {<Feed/>} />
            <Route exact path="/video/:id" element= {<VideoDetail/>} />
            <Route exact path="/channel/:id" element= {<ChannelDetail/>} />
            <Route exact path="/search/:searhTerm" element= {<SearchFeed/>} />
        </Routes>
        </Box>
    </BrowserRouter>

  );


export default App