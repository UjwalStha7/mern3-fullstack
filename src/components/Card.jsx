import { Link } from "react-router-dom"

function Card({blog}){ //destructuring props
    return(
        <>
            <Link to={`/blog/${blog._id}`}>
                <div className="max-w-sm rounded-sm overflow-hidden shadow-lg">
                    <img className="w-full" src={blog.image} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{blog.title}</div>
                        <p className="text-gray-700 text-base">
                            {blog.description}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card