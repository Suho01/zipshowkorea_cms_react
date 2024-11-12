import React, {useState} from 'react';
import Select from 'react-select';
import ReactQuill from "react-quill";

const CustomArrow = (props) => {
    return (
        <div {...props.innerProps}>
            <img src="/images/modal/arrow.svg" alt="arrow" className=""/>
        </div>
    )
}

function Modal({ openModal, closeModal }) {
    const editorImageArray = ["editor_image_s", "editor_image_b", "editor_gallery", "editor_video"];
    const [selectedOption, setSelectedOption] = useState(null);
    const [text, setText] = useState("");

    const options = [
        { value: "제목", label: "제목", fontSize: "40px", fontWeight: "bold"},
        { value: "본문", label: "본문", fontSize: "18px", fontWeight: "normal"},
    ];
    const fontSize = selectedOption ? selectedOption.fontSize : 'inherit';
    const fontWeight = selectedOption ? selectedOption.fontWeight : 'normal';

    const handleOptionChange = (selected) => {
        setSelectedOption(selected);
    }

    const customStyle = {
        control: (provided, state) => ({
            ...provided,
            borderColor: 'transparent',
            boxShadow: 'none',
            '&:hover': { borderColor: 'transparent' },
            backgroundColor: 'var(--C000)',
            padding: '0 12px',
            borderRadius: state.isFocused ? '6px 6px 0 0' : '6px',
        }),
        menu: (provided) => ({
            ...provided,
            marginTop: '1px',
            borderRadius: '0 0 6px 6px'
        }),
        option: (provided, state) => ({
            ...provided,
            background: state.isSelected ? 'var(--C100)' : 'var(--C000)',
            fontWeight: state.isSelected ? 'bold' : 'normal',
            color: state.isSelected ? 'var(--CT1000)' : '#8E949A',
            border: '1px solid var(--C150)',
            height: '40px',
            margin: 0,
        }),
    };

    const modules = {
        toolbar: {
            container: [
                ["image"],
                [{ header: [1, 2, 3, 4, 5, false] }],
                ["bold", "underline"],
            ],
        },
    };

    if (!openModal) return null;

    return (
        <>
            <div className="absolute w-full h-full bg-black/40 z-20">
                <div
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-5/6 h-auto aspect-[1600/886] bg-[--C000] rounded-md overflow-hidden shadow-[0px_0px_15px_0px_#00000026]">
                    <div className="flex items-center justify-between h-12 bg-[--C100] px-5 py-3">
                        <p className="font-bold text-[--CT1000] text-lg">상세페이지 에디터</p>
                        <button onClick={closeModal}><img src="/images/modal/btn_close.svg" alt="btn_close"/></button>
                    </div>
                    <div className="flex items-center justify-between h-14 px-5">
                        <ul className="flex items-center gap-x-10">
                            <li className="">
                                <Select
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                    defaultValue={options[0]}
                                    options={options}
                                    components={{IndicatorSeparator: null, DropdownIndicator: CustomArrow}}
                                    styles={customStyle}
                                    placeholder="제목"
                                    className="w-20 h-10 border border-[--C150] rounded-md modalEditSelect"
                                />
                            </li>
                            {
                                editorImageArray.map((e, i) => {
                                    return (
                                        <li key={i}
                                            className="cursor-pointer w-12 h-10 relative after:absolute after:w-[1px] after:h-4 after:bg-[--C150] after:top-1/2 after:-translate-y-1/2 after:-left-5">
                                            <img src={`/images/modal/${e}.svg`} alt={e} className="px-2 py-1"/>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <button className="bg-[--CT900] w-[120px] h-10 font-medium text-[--C000] rounded">작성 완료</button>
                    </div>
                    <ReactQuill
                        modules={modules}
                        placeholder="상세페이지 내용을 작성해 주세요."
                    />

                    <div className="w-full h-full">
                        <textarea
                            name="" id=""
                            className={`w-full h-full bg-[--CT1000] text-[--C000] py-10 px-20 placeholder:text-[#999]`}
                            style={{ fontSize, fontWeight }}
                            placeholder="상세페이지 내용을 작성해 주세요."
                            value={text}
                            onChange={(e) => setText(e.target.value)}>
                        </textarea>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;