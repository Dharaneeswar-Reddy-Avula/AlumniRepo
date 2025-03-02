import React, { useState, useEffect } from "react";
import {
  FaNewspaper,
  FaBookmark,
  FaRegBookmark,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Alumni_News = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "New Research Grant Awarded to Computer Science Department",
      category: "Research",
      date: "2 hours ago",
      summary:
        "The Computer Science Department has been awarded a $2 million grant for AI research.",
      saved: false,
      graduationYear: 2020,
      author: "Dr. Jane Smith",
    },
    {
      id: 2,
      title: "Annual College Fair Scheduled for Next Month",
      category: "Events",
      date: "1 day ago",
      summary:
        "The annual college fair will take place on May 15th, featuring representatives from over 100 universities.",
      saved: false,
      graduationYear: 2022,
      author: "Alumni Association",
    },
    {
      id: 3,
      title: "Women's Basketball Team Advances to Finals",
      category: "Sports",
      date: "3 days ago",
      summary:
        "Our women's basketball team has secured a spot in the national championship finals.",
      saved: true,
      graduationYear: 2021,
      author: "Sports Department",
    },
    {
      id: 4,
      title: "New Student Center Construction Begins",
      category: "Campus",
      date: "1 week ago",
      summary:
        "Construction of the new state-of-the-art student center has officially begun.",
      saved: false,
      graduationYear: 2023,
      author: "Campus Development Office",
    },
    {
      id: 5,
      title: "Alumni Spotlight: Tech Entrepreneur's Success Story",
      category: "Alumni",
      date: "2 weeks ago",
      summary:
        "John Doe, class of 2015, shares his journey from college graduate to successful tech startup founder.",
      saved: false,
      graduationYear: 2015,
      author: "Alumni Relations",
    },
    {
      id: 6,
      title: "Career Workshop: Navigating the Job Market in 2023",
      category: "Career",
      date: "3 weeks ago",
      summary:
        "Join us for a virtual workshop on job search strategies and interview techniques for recent graduates.",
      saved: false,
      graduationYear: 2023,
      author: "Career Services",
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("date");
  const [graduationYearFilter, setGraduationYearFilter] = useState("All");

  const itemsPerPage = 3;

  const toggleSaved = (id) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.id === id ? { ...article, saved: !article.saved } : article
      )
    );
  };

  const filteredArticles = articles.filter((article) => {
    const matchesFilter = filter === "All" || article.category === filter;
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGraduationYear =
      graduationYearFilter === "All" ||
      article.graduationYear.toString() === graduationYearFilter;
    return matchesFilter && matchesSearch && matchesGraduationYear;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedArticles.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedArticles.length / itemsPerPage);

  const categories = [
    "All",
    "Research",
    "Events",
    "Sports",
    "Campus",
    "Alumni",
    "Career",
  ];
  const graduationYears = [
    "All",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
  ];

  const ArticleItem = ({ article }) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start">
        {/* <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{article.summary}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-4">{article.category}</span>
            <span className="mr-4">{article.date}</span>
            <span className="mr-4">Class of {article.graduationYear}</span>
            <span>By {article.author}</span>
          </div>
        </div> */}
        <div className="text-center text-gray-500 py-8">No articles Yet..</div>

        <button
          onClick={() => toggleSaved(article.id)}
          className="text-blue-800 hover:text-blue-950"
        >
          {article.saved ? (
            <FaBookmark size={20} />
          ) : (
            <FaRegBookmark size={20} />
          )}
        </button>
      </div>
      <div className="mt-4">
        <button className="text-blue-800 hover:text-blue-950 text-sm font-medium">
          Read More
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 mt-4 md:mt-20 lg:mt-28 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-950 mb-8 flex items-center justify-center">
          <FaNewspaper className="mr-2 text-blue-950" />
          Alumni News
        </h1>

        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center sm:justify-start space-x-2 mb-4 sm:mb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                  filter === category
                    ? "bg-blue-950 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <label
              htmlFor="graduationYear"
              className="mr-2 text-sm font-medium text-gray-700"
            >
              Graduation Year:
            </label>
            <select
              id="graduationYear"
              value={graduationYearFilter}
              onChange={(e) => setGraduationYearFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-950"
            >
              {graduationYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="sortBy"
              className="mr-2 text-sm font-medium text-gray-700"
            >
              Sort by:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-950"
            >
              <option value="date">Date</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>

        {currentItems.length > 0 ? (
          currentItems.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))
        ) : (
          <div className="text-center text-gray-500 py-8">
            No articles found matching your criteria.
          </div>
        )}

        {sortedArticles.length > itemsPerPage && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="mr-4 px-3 py-1 rounded-md bg-blue-950 text-white disabled:bg-gray-300 disabled:text-gray-500"
            >
              <FaChevronLeft />
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="ml-4 px-3 py-1 rounded-md bg-blue-950 text-white disabled:bg-gray-300 disabled:text-gray-500"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alumni_News;
