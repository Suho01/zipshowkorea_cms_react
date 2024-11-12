import React from 'react';
import Nav from "./Nav";
import {Link} from "react-router-dom";

function Projects() {
    return (
        <>
            <div className="flex">
                <Nav/>
                <div className="ml-[320px] pt-[60px] flex-1">
                    <div className="py-[60px] px-16 relative">
                        <div className="flex justify-end items-center gap-2">
                            <input type="text" placeholder="검색어를 입력해주세요." className="w-[320px] h-12"/>
                            <button
                                className="rounded-md bg-[--CT900] px-3 font-medium text-white flex items-center gap-x-[5px] h-12">
                                <img src="/images/about/search.svg" alt="search"/>
                                <p>검색</p>
                            </button>
                        </div>
                        <table className="w-full rounded-lg my-4 overflow-hidden shadow-[0_0_0_1px_var(--C150)]">
                            <thead>
                            <tr className="h-10">
                                <th className="w-[20%] h-10 text-[--CT1000] font-bold border border-[--C150] bg-[--C100] px-5 text-left border-collapse rounded-tl-lg">
                                    <input type="checkbox" id="checkedAll"/>
                                    <span className="pl-5">카테고리</span>
                                </th>
                                <th className="w-[10%] h-10 text-[--CT1000] font-bold border border-[--C150] bg-[--C100] px-5 text-left border-collapse">날짜</th>
                                <th className="w-[50%] h-10 text-[--CT1000] font-bold border border-[--C150] bg-[--C100] px-5 text-left border-collapse">제목</th>
                                <th className="w-[20%] h-10 text-[--CT1000] font-bold border border-[--C150] bg-[--C100] px-5 text-left border-collapse">클라이언트</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Array(15).fill().map((_, i) => {
                                    return (
                                        <tr key={i} className="h-10">
                                            <td className="w-[20%] px-5 text-[--CT800] border border-[--C150] border-collapse">
                                                <input type="checkbox" name="list-checkbox"/>
                                                <span className="pl-5">디지털 미디어아트</span>
                                            </td>
                                            <td className="w-[10%] px-5 text-[--CT800] border border-[--C150] border-collapse">2024.07</td>
                                            <td className="w-[50%] px-5 text-[--CT800] border border-[--C150] border-collapse cursor-pointer">
                                                <Link to="/projects/projects_edit_page">한국근대문학관 전시 안내 환경 조성</Link></td>
                                            <td className="w-[20%] px-5 text-[--CT800] border border-[--C150] border-collapse">한국근대문학관</td>
                                        </tr>
                                    );
                                })
                            }
                            </tbody>
                        </table>

                        <div className="flex justify-between">
                            <button className="font-medium w-[120px] h-10 border border-[--C350] rounded-md">삭제
                            </button>
                            <button className="font-medium w-[149px] h-10 bg-[--CT900] text-white rounded-md"><Link
                                to="/projects/projects_write_page" className="box-border px-7 py-[14px]">프로젝트 등록</Link></button>
                        </div>

                        <div className="flex justify-center items-center gap-3">
                            <button className="w-10 h-10">
                                <img src="/images/about/arrow.svg" alt="arrow_left" className="mx-auto"/>
                            </button>
                            <button
                                className="w-10 h-10 cursor-pointer font-bold text-white bg-[--CT900] rounded-md">1
                            </button>
                            {
                                Array(5).fill().map((_, i) => {
                                    return (
                                        <button key={i}
                                            className="w-10 h-10 cursor-pointer text-[--C350] relative after:absolute after:w-[1px] after:h-3 after:bg-[--C150] after:top-1/2 after:-translate-y-1/2 after:left-[-6px]">{i + 2}</button>
                                    );
                                })
                            }
                            <button className="w-10 h-10">
                                <img src="/images/about/arrow.svg" alt="arrow_right" className="mx-auto rotate-180"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;