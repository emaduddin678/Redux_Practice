import React, { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "./BooksSlice";
import { Link } from 'react-router-dom';

const BooksView = () => {
  const uId = useId();
  console.log(uId) 
  const books = useSelector((state) => state.booksReducer.books);
  // console.log(books);
  const disptach = useDispatch()
  const handleDelete = (id) =>{
    disptach(deleteBooks(id))
    
  }
  return (
    <div className="min-h-[50vh]">
      <h1 className="text-4xl text-center font-bold">BooksView Page</h1>
      <table className="mx-auto">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to={"/edit-book"} state={book}>
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none "
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(id);
                      }}
                      type="button"
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
