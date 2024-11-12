import React, {useState} from 'react';
import Nav from "../component/Nav";
import {Link} from "react-router-dom";
import Modal from "../Modal";

function ProjectsEditPage() {
    const [modal, setModal] = useState(false);

    return (
        <>
            <Nav />
            <Modal openModal={modal} closeModal={() => setModal(false)} />
            <div className="ml-[320px] pt-[60px] relative">
                <div className="pt-[60px] px-[60px]">
                    <div className="flex items-center justify-end gap-x-3">
                        <button
                            className="bg-[--C100] w-[120px] h-10 rounded-md text-[--CT1000] font-medium text-center">
                            <Link to="/projects" className="py-[14px] px-[30.5px] box-border">복제하기</Link>
                        </button>
                        <button
                            className="border border-[--C350] w-[120px] h-10 rounded-md text-[--CT1000] font-medium text-center">
                            <Link to="/projects" className="py-[14px] px-[30.5px] box-border">목록으로</Link>
                        </button>
                    </div>

                    <div className="w-full block rounded-lg my-4 border border-[--C150] overflow-hidden">
                        <div className="flex border-b border-[--C150]">
                            <ul className="flex p-0 basis-3/12 border-r border-[--C150]">
                            <li className="bg-[--C100] text-[--CT1000] font-medium h-[56px] text-center leading-[56px] basis-[180px] border-r border-[--C150]">카테고리
                                    선택
                                </li>
                                <li className="text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border h-[49px] leading-[49px] basis-[calc(100%-186px)]">
                                    <select name="" id=""></select>
                                </li>
                            </ul>
                            <ul className="flex p-0 basis-3/12">
                                <li className="bg-[--C100] text-[--CT1000] font-medium h-[56px] text-center leading-[56px] basis-[156px] border-r border-[--C150]">날짜</li>
                                <li className="text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border h-[49px] leading-[49px] basis-[calc(100%-162px)]">2024.06</li>
                            </ul>
                            <ul className="flex p-0 basis-6/12">
                                <li className="bg-[--C100] text-[--CT1000] font-medium h-[56px] text-center leading-[56px] basis-[156px] border-r border-[--C150]">클라이언트</li>
                                <li className="text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border h-[49px] leading-[49px] basis-[calc(100%-162px)]">인천테크노파크,
                                    강화 DMZ 평화전망대
                                </li>
                            </ul>
                        </div>
                        <ul className="flex border-b border-[--C150]">
                            <li className="bg-[--C100] text-[--CT1000] font-medium h-[56px] text-center leading-[56px] basis-[180px] border-r border-[--C150]">프로젝트명</li>
                            <li className="text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border h-[49px] leading-[49px] basis-[calc(100%-186px)]">한국근대문학관
                                전시 안내 환경 조성
                            </li>
                        </ul>
                        <ul className="flex border-b border-[--C150]">
                            <li className="bg-[--C100] text-[--CT1000] font-medium h-[56px] text-center leading-[56px] basis-[180px] border-r border-[--C150]">썸네일
                                이미지
                            </li>
                            <li className="basis-[calc(100%-186px)]">
                                <div className="relative inline">
                                    <input type="text" placeholder="썸네일에 사용할 이미지를 등록해주세요."
                                           className="text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border h-[49px] leading-[49px] w-5/12"/>
                                    <button
                                        className="w-[120px] h-10 bg-[--CT900] text-[--C000] font-medium rounded absolute top-1/2 -translate-y-1/2 right-2">찾아보기
                                    </button>
                                </div>
                                <span className="text-[--C300] text-sm pl-[6px]">※ 이미지의 권장 해상도는 1436X804이며, jpg, jpeg, png 파일만 업로드 가능합니다.</span>
                            </li>
                        </ul>
                        <ul className="flex border-b border-[--C150]">
                            <li className="bg-[--C100] text-[--CT1000] font-medium h-[56px] text-center leading-[56px] basis-[180px] border-r border-[--C150]">상세페이지
                                메인
                            </li>
                            <li className="basis-[calc(100%-186px)]">
                                <div className="relative inline">
                                    <input type="text" placeholder="썸네일에 사용할 이미지를 등록해주세요."
                                           className="text-[--CT900] m-1 border border-[--C150] rounded-md px-3 box-border h-[49px] leading-[49px] w-5/12"/>
                                    <button
                                        className="w-[120px] h-10 bg-[--CT900] text-[--C000] font-medium rounded absolute top-1/2 -translate-y-1/2 right-2">찾아보기
                                    </button>
                                </div>
                                <span className="text-[--C300] text-sm pl-[6px]">※ 이미지 및 동영상의 권장 해상도는 3840X2160이며, jpg, jpeg, png, mp4 파일만 업로드 가능합니다.</span>
                            </li>
                        </ul>
                        <ul className="flex">
                            <li className="bg-[--C100] text-[--CT1000] font-medium h-12 text-center leading-[48px] basis-[180px] border-r border-[--C150]">
                                상세페이지 내용
                            </li>
                            <li className="m-1">
                                <button className="w-[151px] h-10 bg-[--CT900] text-[--C000] font-medium rounded" onClick={() => setModal(true)}>내용 수정하기</button>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-between">
                        <button className="font-medium w-[120px] h-10 border border-[--C350] rounded-md">삭제
                        </button>
                        <div className="flex justify-end gap-x-3">
                            <button className="font-medium w-[120px] h-10 bg-[--C100] text-[--CT1000] rounded-md">미리보기
                            </button>
                            <button className="font-medium w-[120px] h-10 bg-[--CT900] text-[--C000] rounded-md">저장
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectsEditPage;