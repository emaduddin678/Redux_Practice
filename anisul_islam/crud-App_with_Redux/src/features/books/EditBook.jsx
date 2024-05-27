import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const { id, title, author } = location.state;
  // console.log(book);
  // console.log("🚀 ~ EditBook ~ id, title, author:", id, title, author)
  const [bookInfo, setBookInfo] = useState({
    id: id,
    title: title,
    author: author,
  });
  const dispathch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBookInfo({
      ...bookInfo,
      [e.target.id]: e.target.value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const book = { ...bookInfo };
    dispathch(updateBook(book));
    navigate("/show-books", { replace: true });
  };
  
  return (
    <section className="p-6 bg-gray-800 text-gray-50">
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="title" className="text-sm">
                Book Title
              </label>
              <input
                id="title"
                type="text"
                onChange={handleChange}
                value={bookInfo.title}
                placeholder="Book title"
                className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="author" className="text-sm">
                Author Name
              </label>
              <input
                id="author"
                type="text"
                value={bookInfo.author}
                onChange={handleChange}
                placeholder="Author Name..."
                className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-default-400 border-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <button
                type="submit"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Update book
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default EditBook;
