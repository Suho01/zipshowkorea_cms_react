import React from 'react';
import Nav from "../component/Nav";
import {Link} from "react-router-dom";

function AboutWritePage() {
    return (
        <>
            <Nav />
            <div className="ml-[320px] pt-[60px] relative">
                <div className="pt-[60px] px-[60px]">
                    <div className="w-full block rounded-lg my-4 border border-[--C150] overflow-hidden">
                        <div className="flex border-b border-[--C150]">
                            <ul className="flex p-0 basis-1/3 border-r border-[--C150]">
                                <li className="bg-[--C100] text-[--CT1000] font-medium h-[57px] text-center leading-[57px] basis-[180px] border-r border-[--C150]">연도</li>
                                <li className="basis-[calc(100%-186px)]">
                                    <input type="text" placeholder="숫자만 입력(ex. 2024)" className="h-[49px] text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border leading-[49px] w-[calc(100%-2px)]"/>
                                </li>
                            </ul>
                            <ul className="flex p-0 basis-1/3">
                                <li className="bg-[--C100] text-[--CT1000] font-medium h-[57px] text-center leading-[57px] basis-[156px] border-r border-[--C150]">월</li>
                                <li className="basis-[calc(100%-162px)]">
                                    <input type="text" placeholder="월을 선택해주세요." className="h-[49px] text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border leading-[49px] w-full"/>
                                </li>
                            </ul>
                        </div>
                        <ul className="flex">
                            <li className="bg-[--C100] text-[--CT1000] font-medium  h-[57px] text-center leading-[57px] basis-[180px] border-r border-[--C150]">내용</li>
                            <li className="basis-[calc(100%-180px)]">
                                <input type="text" placeholder="연혁 내용을 입력해 주세요." className="h-[49px] text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border leading-[49px] w-[calc(100%-8px)]"/>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-between">
                        <button className="font-medium w-[120px] h-10 border border-[--C350] rounded-md"><Link to="/about" className="px-[45px] py-[14px] box-border">취소</Link></button>
                        <button className="font-medium w-[120px] h-10 bg-[--CT900] text-white rounded-md">저장</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutWritePage;