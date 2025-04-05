import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../Context/AppContext";

const Blogs = () => {
    // Consume
    const { posts, loading } = useContext(AppContext);
    console.log(posts);
    return (
        <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px] mb-[70px]">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div className="">
                    <p className="">No Post Found</p>
                </div>
            ) : (
                posts.map((post) => {
                    return <div key={post.id} className="">
                        <p className="font-bold text-lg ">`{post.title}`</p>
                        <p className="text-[14px] mt-[4px]">
                            By <span className="italic">{post.author}</span> or{" "}
                            <span className="underline font-bold">{post.category}</span>
                        </p>
                        <p className="text-[14px] mt-[4px]">Posted on {post.date}</p>
                        <p className="text-[15px] mt-[12px]">{post.content}</p>
                        <div className="flex flex-wrap gap-x-2 items-center">
                            {post.tags.map((tag, index) => {
                                return <span key={index} className="text-xs font-semibold underline text-blue-700 cursor-pointer mt-[5px]">#{tag}</span>;
                            })}
                        </div>
                        <br color="5px"/>
                        <hr/>
                    </div>;
                })
            )}
        </div>
    );
};

export default Blogs;
