import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import TagsList from "./TagsList";
import "./Tags.css";
const Tags = () => {
  const tagsList = [
    {
      id: 1,
      tagName: "javascrit",
      tagDesc:
        "For questions regarding programming in ECMAScript (JavaScript) and its various dialects/implementation we use javascript",
    },
    {
      id: 2,
      tagName: "python",
      tagDesc:
        "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics",
    },
    {
      id: 3,
      tagName: "c#",
      tagDesc:
        "C# is a new language created by Microsoft and submitted to the ECMA for standardization",
    },
    {
      id: 4,
      tagName: "java",
      tagDesc:
        "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible",
    },
    {
      id: 5,
      tagName: "php",
      tagDesc:
        "PHP is a widely-used open source general-purpose scripting language that is especially suited for web development ",
    },
    {
      id: 6,
      tagName: "html",
      tagDesc: "It is a standard markup language for web page creation",
    },
    {
      id: 7,
      tagName: "android",
      tagDesc:
        "Android is a software package and linux based operating system for mobile devices such as tablet computers and smartphones",
    },
    {
      id: 8,
      tagName: "css",
      tagDesc:
        "CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language",
    },
    {
      id: 9,
      tagName: "React js",
      tagDesc:
        "· React is a declarative, efficient, and flexible JavaScript library for building user interfaces.",
    },
    {
      id: 10,
      tagName: "node.js",
      tagDesc:
        "Node.js is an open-source, cross-platform JavaScript runtime environment used for executing JavaScript code outside of a web browser",
    },
  ];

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other
          , similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question.
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tagsList.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
