import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/eLogo.jpg';
import { AuthContext } from '../../contexts/UsersContext';
const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <nav className="w-full bg-gray-300 shadow ">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div className='flex '>
                        <img className='w-10 h-10 mt-2 rounded-full md:content-center' src={logo} alt="" />
                        <Link to='/' className=" p-3 text-gray-800 text-xl">Easy To Learn</Link>
                        <h3 className='p-4 text-sky-800'>Welcome! {user?.displayName}</h3>
                   
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">

                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white hover:text-indigo-200">
                                    <Link to='/' className=" text-gray-800 text-xl" >Home</Link>
                                </li>
                                <li className="text-white hover:text-indigo-200">
                                    <Link to='/courses' className=" text-gray-800 text-xl" >Courses</Link>
                                </li>
                                <li className="text-white hover:text-indigo-200">
                                    <Link to='/faq' className=" text-gray-800 text-xl">FAQ</Link>
                                </li>
                                <li className="text-white hover:text-indigo-200">
                                    <Link to='/blog' className=" text-gray-800 text-xl">Blog</Link>
                                </li>
                                <li className="text-white hover:text-indigo-200">
                                </li>
                            </ul>

                            <div className="mt-3 space-y-2 md:hidden">
                                {user?.uid ?
                                    <button onClick={handleSignOut} className="px-4 py-2 text-gray-800 bg-gray-300 rounded-md shadow hover:bg-gray-500">Logout
                                    </button> :
                                    <>
                                        <Link to='/login' className="inline-block btn btn-ghost normal-case w-full px-4 py-2 text-center text-white bg-gray-300 rounded-md shadow hover:bg-gray-800">
                                            Login in
                                        </Link>
                                        <Link to='/registration' className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-gray-300 rounded-md shadow hover:bg-gray-500">
                                            Registration
                                        </Link>
                                    </>
                                }
                                <div>
                                    <div className="dropdown dropdown-end space-x-2 md:inline-block">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.photoURL} alt="" />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52">
                                            <li>
                                                <span className="">{user?.displayName}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        {
                            user?.uid ? <button onClick={handleSignOut} className="px-4 py-2 text-gray-800 bg-gray-300 rounded-md shadow hover:bg-gray-500">Logout
                            </button> :
                                <>
                                    <Link to='/login' className="px-4 py-2 text-gray-800 bg-gray-300 rounded-md shadow hover:bg-gray-500">
                                        Log in
                                    </Link>
                                    <Link to='/registration' className="px-4 py-2 text-gray-800 bg-gray-300 rounded-md shadow hover:bg-gray-500">
                                        Registration
                                    </Link>
                                </>
                        }

                    </div>
                    <div className="dropdown dropdown-end hidden space-x-2 md:inline-block">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user?.uid ? <img src={user?.photoURL} alt="" /> : " "
                                }
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    <span className="badge">{user?.displayName}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;