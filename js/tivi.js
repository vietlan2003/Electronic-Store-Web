const sapxepTen=(th)=>{
    
    let co=th.getAttribute("sxTen")
    let danhsachloc=[];
    if(co=="true"){
        // Tăng
        danhsachloc=dsTivi.sort(function(a, b){return (a.Ten.localeCompare(b.Ten))});
        th.innerHTML=`Sắp xếp Tên Giảm`
        th.setAttribute("sxTen",false)
    }else{
        // Giảm
        danhsachloc=dsTivi.sort(function(a, b){return (b.Ten.localeCompare(a.Ten))});
        th.innerHTML=`Sắp xếp Tên Tăng`
        th.setAttribute("sxTen",true)
    }
    Xuat_Tivi(dsTivi,Th_Tivi);
}
const sapxepGia=(th)=>{
    
    let co=th.getAttribute("sxGia");
    let danhsachloc=[];
    if(co=="true"){
        // Tăng
        danhsachloc =dsTivi.sort(function(a, b){return Number(a.Don_gia_Ban) - Number(b.Don_gia_Ban)});
        th.innerHTML=`Sắp xếp Giá Giảm`
        th.setAttribute("sxGia",false)
    }else{
        // Giảm
        danhsachloc =dsTivi.sort(function(a, b){return Number(b.Don_gia_Ban) - Number(a.Don_gia_Ban)});
        th.innerHTML=`Sắp xếp Giá Tăng`
        th.setAttribute("sxGia",true)
    }
    Xuat_Tivi(dsTivi,Th_Tivi);
}


const taoNhom = () => {
    dsNhom = Array.from(new Set(dsTivi.map(x => x.Nhom_Tivi.Ma_so))).map(Ma_so => {
        nhom = {
            Ma_so: Ma_so,
            Ten: dsTivi.find(x => x.Nhom_Tivi.Ma_so == Ma_so).Nhom_Tivi.Ten
        }
        return nhom
    })

    dsNhom.unshift({ Ma_so: 'ALL', Ten: 'Tất cả' }) // Thêm vào mảng tại vị trí đầu
}

const XuatNhom = (dsNhom, The_hien) => {
    let html = ``;
    dsNhom.forEach(nhom => {
        html += `
        <button class="btn btn-sm btn-primary" id='${nhom.Ma_so}' onclick=XuatTiviTheoNhom('${nhom.Ma_so}')>${nhom.Ma_so}</button>
        `
    })
    The_hien.innerHTML = html;
}

const XuatTiviTheoNhom = (Ma_nhom) => {
    let dsNut=document.getElementsByClassName("activeNut");
    dsNut[0].classList.remove("activeNut");
    document.getElementById(`${Ma_nhom}`).classList.add("activeNut");
    if (Ma_nhom == "ALL") {
        //Xuat_Tivi(dsTivi, Th_Tivi)
        dsTivi=dsGoc;
    } else {
        //let tmp = dsTivi.filter(tivi => tivi.Nhom_Tivi.Ma_so == Ma_nhom);
        //Xuat_Tivi(tmp, Th_Tivi)
        dsTivi=dsGoc.filter(tivi => tivi.Nhom_Tivi.Ma_so == Ma_nhom);
    }
    Xuat_Tivi(dsTivi, Th_Tivi)
}

const Xuat_Tivi=(ds,tag)=>{
    let html=``;
    ds.forEach(item=>{
        html+=`
        <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${urlImg}/${item.Ma_so}.png" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${item.Ten}</h5>
                                    <!-- Product price-->
                                    ${item.Don_gia_Ban.toLocaleString()}<sup>đ</sup>
                                    <div><strong>Hãng SX: ${item.Nhom_Tivi.Ma_so}</strong></div>
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
        `
    })

    tag.innerHTML=html;

}

const KeyCode=(event)=>{
    if (event.keyCode == 13) {
        let gt = event.target.value
        console.log(gt)
        dsTivi = dsGoc.filter(x => x.Ten.toLowerCase().includes(gt.toLowerCase()))
        Xuat_Tivi(dsTivi, Th_Tivi)
    }
}