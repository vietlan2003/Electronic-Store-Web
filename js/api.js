const urlData='http://localhost:8080';
const urlImg='http://localhost:8080';

const apiCuahang=()=>{
    return new Promise((Ket_qua, Loi) => {
        var Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            Ket_qua(Doi_tuong_Kq)
        }
        Xu_ly_HTTP.open("GET", `${urlData}/Cuahang`)
        Xu_ly_HTTP.send()
    })
}
const apiTivi=()=>{
    return new Promise((Ket_qua, Loi) => {
        var Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            Ket_qua(Doi_tuong_Kq)
        }
        Xu_ly_HTTP.open("GET", `${urlData}/dsTivi`)
        Xu_ly_HTTP.send()
    })
}
const apiMobile=()=>{
    return new Promise((Ket_qua, Loi) => {
        var Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            Ket_qua(Doi_tuong_Kq)
        }
        Xu_ly_HTTP.open("GET", `${urlData}/dsDienthoai`)
        Xu_ly_HTTP.send()
    })
}
const apiFood=()=>{
    return new Promise((Ket_qua, Loi) => {
        var Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            var Doi_tuong_Kq = JSON.parse(Xu_ly_HTTP.responseText)
            Ket_qua(Doi_tuong_Kq)
        }
        Xu_ly_HTTP.open("GET", `${urlData}/dsMathang`)
        Xu_ly_HTTP.send()
    })
}
