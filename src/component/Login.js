import React, {useState} from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const onChangeInputId = (e) => {
        setEmail(e.target.value);
    };
    const onChangeInputPassword = (e) => {
        setPassword(e.target.value);
    };
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
 
    const isFormValid = email.length >= 8 && password.length >= 8;
    console.log(email, password, isFormValid);

    return (
        <div className="bg-[--C150] flex w-full h-screen">
            <div className="flex-1 flex flex-col justify-center items-center bg-[--C000] z-[1] border-r border-[--C150]">
                <img src="/images/login/logo.png" alt="logo" className="w-[197px]"/>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center bg-[--C000] z-[1]">
                <div>
                    <h1 className="font-bold text-2xl text-[--CT900] pb-[60px]">집쇼코리아 홈페이지 관리자</h1>
                    <div className="flex flex-col justify-start gap-3 mb-8">
                        <label htmlFor="email">이메일 주소</label>
                        <input type="text" name="email" id="email" placeholder="이메일 주소를 입력해 주세요." onChange={onChangeInputId} className="w-[400px] h-12"/>
                    </div>
                    <div className="flex flex-col justify-start gap-3 mb-8 relative">
                        <label htmlFor="password">비밀번호</label>
                        <input type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="비밀번호를 입력해 주세요." onChange={onChangeInputPassword} className="w-[400px] h-12"/>
                        <div className="absolute bottom-3 right-3 cursor-pointer" onClick={togglePassword}>
                            {
                                showPassword ? (
                                    <img src="/images/login/visibility.svg" alt="visibility"/>
                                    ) : (
                                    <img src="/images/login/visibility_off.svg" alt="visibility_off"/>
                                )
                            }
                        </div>
                    </div>
                    <br/>
                    <button
                        type="submit"
                        className={`w-[400px] h-[60px] text-[--C000] my-2 flex justify-center items-center border rounded-md gap-[5px] transition-all ease-in-out 
                        ${isFormValid ? 'bg-[--CT900]' : 'bg-[--C250]'}
                        hover:bg-[--CT800] 
                        disabled:cursor-default disabled:bg-[--C250] disabled:border disabled:border-[--C250]`}
                        disabled={!isFormValid}>로그인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;