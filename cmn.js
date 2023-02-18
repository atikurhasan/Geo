function mul(a,b)
{
    const c = parseFloat(a) * parseFloat(b);
    return c;
}


function displayData(serial,name,area){
    const container = document.getElementById('table-container');

    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${serial}.${name}</td>
    <td>${area.toFixed(2)}cm<sup>2</sup></td>
    <td><button class="text-white font-semibold text-center p-1 bg-sky-500 rounded m-4">convert to m<sup>2</sup></button></td>
    `;
    container.appendChild(tr);
}

// blog page
document.getElementById('btn-submit').addEventListener('click', function(){

        window.location.href='blog.html';

})
