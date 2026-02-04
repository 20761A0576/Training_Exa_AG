import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import PostList from "./Pages/PostList/PostList"
import NotFoundPage from "./Pages/NotFound/NotFound";
import PostComment from "./Pages/SinglePost/CommentPage/CommentPage";
import PostAuthor from "./Pages/SinglePost/AuthorPage/AuthorPage";
import SinglePost from "./Pages/SinglePost/SinglePost";
import Layout from "./Layout/Layout";
import Contact from "./Pages/Contact/Contact";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/post" element={<PostList />} />
                    <Route path="/posts/:id" element={<SinglePost />}>
                        <Route path="author" element={<PostAuthor />} />
                        <Route path="comments" element={<PostComment />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
