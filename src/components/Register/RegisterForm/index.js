import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import * as yup from 'yup';
import logodn from '../../../assets/images/logolaptop.png';
import '../RegisterForm/index.scss';
const phoneRegExp = /((84|0)[3|5|7|8|9])+([0-9]{8})\b/g;
const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const schema = yup.object().shape({
    tendn: yup.string().required("Vui lòng điền số điện thoại!").matches(phoneRegExp, "Số điện thoại không đúng định dạng!"),
    email: yup.string().required("Vui lòng điền email!").matches(emailRegExp, "Email không đúng định dạng!"),
    hoten: yup.string().required("Vui lòng điền họ tên!"),
    diachi: yup.string().required("Vui lòng điền địa chỉ!"),
    matkhau: yup.string().required("Vui lòng điền mật khẩu!").min(6, "Mật khẩu phải lớn hơn 6 kí tự!").max(15, "Mật khẩu không được quá 15 kí tự!"),
    nhaplaimatkhau: yup.string().required("Vui lòng điền mật khẩu xác nhận!").oneOf([yup.ref('matkhau'), null], 'Mật khẩu xác nhận không chính xác!')
});
function RegisterForm(props) {
    const { onSubmit } = props;
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    }
    )
    const submit = (data) => {
        if (onSubmit)
            onSubmit(data);
    }
    return (
        <div className="register">
            <div className="register__logo"><img className="register__logo-img" src={logodn} alt="logo">
            </img></div>
            <div className="register__title">Đăng Ký</div>
            <div className="register__input">
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder="Số điện thoại*" {...register('tendn')}></input>
                    <p>{errors.tendn?.message}</p>
                    <input type="text" placeholder="Email*" {...register('email')}></input>
                    <p>{errors.email?.message}</p>
                    <input type="text" placeholder="Họ tên*" {...register('hoten')}></input>
                    <p>{errors.hoten?.message}</p>
                    <input type="text" placeholder="Địa chỉ*" {...register('diachi')}></input>
                    <p>{errors.diachi?.message}</p>
                    <input type="password" placeholder="Mật khẩu*" {...register('matkhau')}></input>
                    <p>{errors.matkhau?.message}</p>
                    <input type="password" placeholder="Nhập lại mật khẩu*" {...register('nhaplaimatkhau')}></input>
                    <p>{errors.nhaplaimatkhau?.message}</p>
                    <div className="register__btn-sb">
                        <button className="register__btn" type="submit" >Đăng Ký</button>
                    </div>
                </form>
            </div>
            <div className="register__account">
                Bạn đã có tài khoản, <NavLink to="/dangnhap" >Đăng nhập</NavLink>
            </div>

        </div >
    );
}
export default RegisterForm;