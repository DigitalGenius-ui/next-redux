"use client";

import React, { useEffect, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "@/Redux/Slices/TodoSlice";
import SingleTodo from "@/components/Todo";

const Todo = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [editTodo, setEditTodo] = useState(null);

  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todoLists);

  useEffect(() => {
    if (editTodo) {
      const valueForUpdate = todo.find((item) => item.id === editTodo.id);
      setText(valueForUpdate.text);
    }
  }, [editTodo]);

  // add emoji
  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  const addTodos = async (event) => {
    event.preventDefault();
    if (!text) return;
    if (editTodo) {
      dispatch(
        updateTodo({
          id: editTodo.id,
          text,
          time: new Date(),
          completed: editTodo.completed,
        })
      );
      setText("");
      setShowEmoji(false);
      setEditTodo(null);
    } else {
      const data = {
        id: Math.floor(Math.random() * 100000),
        text,
        time: new Date(),
        completed: false,
      };
      dispatch(addTodo(data));
      setText("");
      setShowEmoji(false);
    }
  };

  return (
    <div className="pt-3rem w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] mx-auto mt-[11rem]">
      <h1 className="text-2xl font-medium text-center capitalize pb-[2rem]">
        tailwind todo list
      </h1>

      {/* todo input  */}
      <form onSubmit={addTodos} className="flex items-start gap-2 pt-2rem">
        <div className="w-full flex items-end p-2 bg-todo rounded-sm relative">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="write your text"
            className="w-full bg-transparent outline-none resize-none text-sm"
            cols="30"
            rows="2"></textarea>

          <span
            onClick={() => setShowEmoji(!showEmoji)}
            className="cursor-pointer hover:text-slate-300">
            <BsEmojiSmile />
          </span>

          {showEmoji && (
            <div className="absolute top-[100%] right-2">
              <Picker
                data={data}
                emojiSize={20}
                emojiButtonSize={28}
                onEmojiSelect={addEmoji}
                maxFrequentRows={0}
              />
            </div>
          )}
        </div>

        <button
          className="flex items-center capitalize gap-2 bg-yellow-200 text-black py-1.5
            px-3 rounded-sm hover:bg-yellow-100">
          <AiOutlinePlus />
          {editTodo ? "update" : "add"}
        </button>
      </form>

      {/* print the todo lists  */}
      <div className="mt-[2rem]">
        {todo.length > 0 && <SingleTodo setEditTodo={setEditTodo} />}
      </div>
    </div>
  );
};

export default Todo;
