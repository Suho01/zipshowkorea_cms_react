import React from 'react';
import Nav from "../component/Nav";
import {Link} from "react-router-dom";

function AboutEditPage() {
    return (
        <>
            <Nav />
            <div className="ml-[320px] pt-[60px] relative">
                <div className="pt-[60px] px-[60px]">
                    <div className="flex items-center justify-end">
                        <button
                            className="border border-[--C350] w-[120px] h-10 rounded-md text-[--CT1000] font-medium text-center">
                            <Link to="/about" className="py-[14px] px-[30.5px] box-border">목록으로</Link>
                        </button>
                    </div>

                    <div className="w-full block rounded-lg my-4 border border-[--C150] overflow-hidden">
                        <div className="flex border-b border-[--C150]">
                            <ul className="flex p-0 basis-1/3 border-r border-[--C150]">
                                <li className="bg-[--C100] text-[--CT1000] font-medium h-[57px] text-center leading-[57px] basis-[180px] border-r border-[--C150]">연도</li>
                                <li className="text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border h-[49px] leading-[49px] basis-[calc(100%-186px)]">2024</li>
                            </ul>
                            <ul className="flex p-0 basis-1/3">
                                <li className="bg-[--C100] text-[--CT1000] font-medium h-[57px] text-center leading-[57px] basis-[156px] border-r border-[--C150]">월</li>
                                <li className="text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border h-[49px] leading-[49px] basis-[calc(100%-162px)]">
                                    <select name="" id=""></select></li>
                            </ul>
                        </div>
                        <ul className="flex">
                            <li className="bg-[--C100] text-[--CT1000] font-medium  h-[57px] text-center leading-[57px] basis-[180px] border-r border-[--C150]">내용</li>
                            <li className="text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border h-[49px] leading-[49px] basis-[calc(100%-180px)]">한국근대문학관
                                전시 안내 환경 조성
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-between">
                        <button className="font-medium w-[120px] h-10 border border-[--C350] rounded-md">삭제
                        </button>
                        <button className="font-medium w-[120px] h-10 bg-[--CT900] text-white rounded-md">저장</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutEditPage;