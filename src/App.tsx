import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage.tsx";
import BlogPage from "./pages/blog-page/BlogPage.tsx";
import AboutPage from "./pages/about-page/AboutPage.tsx";
import NotFoundPage from "./pages/not-found-page/NotfoundPage.tsx";
import {Layout} from "./components/layout/Layout.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="posts" element={<BlogPage/>}/>
                    <Route path="about" element={<AboutPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
