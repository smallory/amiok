// const iss_pc = Document.querySelector.all("")
const iss_rpc = document.getElementsByName("iss_pc");
const iss_rai = document.getElementsByName("iss_ai");
const iss_rwb = document.getElementsByName("iss_wb");
const iss_rdi = document.getElementsByName("iss_di");

function sumarr(raw_arr) {
    const arr = Array.from(raw_arr);
    var ret = 0;
    for (let v of arr) {
	ret += Number(v.value);
    }
    return ret;
};

function iss_score() {
    document.getElementById("iss_conflict").innerHTML = sumarr(iss_rpc);
    document.getElementById("iss_depression").innerHTML = sumarr(iss_rdi);
    document.getElementById("iss_wellbeing").innerHTML = sumarr(iss_rwb);
    document.getElementById("iss_activation").innerHTML = sumarr(iss_rai);
}

function zero_getElArr(raw_arr) {
    const arr = Array.from(raw_arr);
    for (let v of arr) {
	v.value = 0;
    }
}

function iss_clear() {
    zero_getElArr(iss_rpc);
    zero_getElArr(iss_rdi);
    zero_getElArr(iss_rwb);
    zero_getElArr(iss_rai);
}
// alert for pop-up
