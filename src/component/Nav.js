import React from 'react';
import {Link, useLocation} from "react-router-dom";

const layoutMenu = [
    {
        link: "/about",
        header_image: "about_header",
        nav_on_image: "about_nav_on",
        nav_off_image: "about_nav_off",
        title: "연혁 관리"
    },
    {
        link: "/projects",
        header_image: "projects_header",
        nav_on_image: "projects_nav_on",
        nav_off_image: "projects_nav_off",
        title: "프로젝트 관리"
    }
];
function Nav() {
    const location = useLocation();
    return (
        <div className="">
            <div className="nav bg-[--C000] w-[320px] h-dvh border-r border-[--C150] flex flex-col items-center fixed top-0 left-0 z-10">
                <header className="">
                    <img src="/images/common/logo_about.svg" alt="logo_about" className="w-auto mt-10"/>
                </header>
                <div className="mt-[53px] w-full pl-5">
                    <nav>
                        <ul>
                            {
                                layoutMenu.map((e, i) => {
                                    const isActive = location.pathname.startsWith(e.link);
                                    return (
                                        <li key={i}
                                            className={`cursor-pointer px-[34px] ${isActive ? 'rounded-tl-full rounded-bl-full bg-[--C100]' : ''}`}>
                                            <Link to={e.link}
                                                  className="flex gap-x-3 py-[18px] my-3 mx-auto text-center">
                                                <img
                                                    src={`/images/common/${isActive ? e.nav_on_image : e.nav_off_image}.svg`}
                                                    alt={e.image}/>
                                                <p className={`${isActive ? 'font-bold text-[--CT1000]' : 'text-[--C350]'}`}>{e.title}</p>
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="header bg-[--C000] w-[calc(100%-320px)] ml-[320px] fixed top-0 left-0 z-10">
                <div className="w-full flex flex-col">
                    <div>
                        <div
                            className="border-b border-[--C150] flex flex-row justify-between w-inherit max-h-[60px] py-5 px-14">
                            {
                                layoutMenu.map((e, i) => {
                                    if (location.pathname.startsWith(e.link)) {
                                        return (
                                            <div key={i} className="flex items-center gap-x-[10px]">
                                                <img src={`/images/common/${e.header_image}.svg`} alt={e.header_image}/>
                                                <p className="font-bold text-xl text-[--CT700]">{e.title}</p>
                                            </div>
                                        );
                                    }
                                })
                            }
                            <div className="flex flex-row gap-x-3 items-center cursor-pointer">
                                <img src="/images/common/logout.svg" alt="logout"/>
                                <p className="font-medium text-[--CT700]">로그아웃</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;