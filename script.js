document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('userthumb').onchange = function (e) {
        loadImage(
            e.target.files[0],
            function (img) {
                document.getElementById("thumb").innerHTML = "";
                document.getElementById("thumb").appendChild(img);
            }, {
                canvas: true
            }
        );
    };
    document.getElementById('image').onchange = function (e) {
        loadImage(
            e.target.files[0],
            function (img) {
                document.getElementById("mainimage").innerHTML = "";
                document.getElementById("mainimage").appendChild(img);
            }, {
                maxWidth: 414,
                canvas: true
            }
        );
    };
    document.getElementById("username").onchange = (e) => {
        [...document.getElementsByClassName("username")].map( (item) => {
            item.innerHTML = e.target.value;
        });
    };
    document.getElementById("likes").onchange = (e) => {
        document.getElementById("likenumber").innerHTML = e.target.value;
    };
    document.getElementById("ubication").onchange = (e) => {
        document.getElementById("ubicationtxt").innerHTML = e.target.value;
    };
    document.getElementById("comments").onchange = (e) => {
        document.getElementById("commentno").innerHTML = e.target.value;
    };
    document.getElementById("comment").onchange = (e) => {
        document.getElementById("commentbody").innerHTML = e.target.value;
    };
    document.getElementById("chkborder").onchange = (e) => {
        document.getElementById("instagram").classList.toggle("borde");
    };
    document.getElementById("width").onchange = (e) => {
        document.getElementById("instagram").style.width = e.target.value;
    };

    document.getElementById("elboton").addEventListener("click", () => {
        html2canvas(document.getElementById("instagram"), {
        }).then(function  (canvas) {
            document.body.appendChild(canvas);
            const link = document.createElement('a');
            link.download = 'instamock.png';
            link.href = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            document.body.removeChild(canvas);
        }); 
    });
});





