const Xuat_Mobile=(ds,tag)=>{
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