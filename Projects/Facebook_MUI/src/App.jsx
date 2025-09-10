import Box  from "@mui/material/Box"
import Stack from "@mui/material/Stack"

import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Footer from './components/Footer'
import Add from "./components/Add"

function App() {

  return (
    <>
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
      <Footer />
    </Box>
    </>
  )
}

export default App
