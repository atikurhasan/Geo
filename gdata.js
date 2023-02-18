let serial = 0;
// triangle card
document.getElementById('btn-calculate-triangle').addEventListener('click',function(){
    const a = document.getElementById('input-b').value;
    const b = document.getElementById('input-h').value;
    // validation
    if(isNaN(a) || isNaN(b) || a<=0 || b<=0 || a=="" || b==""){
        alert('provide a number');
        return;
    }

    
    
    const area = 0.5 * mul(a,b);
    const name = 'triangle';
     
    serial+=1;
    displayData(serial,name,area);
})
// rectangle - card
document.getElementById('btn-calculate-rectangle').addEventListener('click',function(){
    const a = document.getElementById('input-w').value;
    const b = document.getElementById('input-l').value;
    // validation
    if(isNaN(a) || isNaN(b)  || a<=0 || b<=0 || a=="" || b==""){
        alert('provide a number');
        return;
    }
  
    const area = mul(a,b);
    const name = 'rectangle';

    serial+=1;
    displayData(serial,name,area);
})

// parallelogram card
document.getElementById('btn-calculate-parallelogram').addEventListener('click',function(){
    const a = document.getElementById('input-pb').value;
    const b = document.getElementById('input-ph').value;
     // validation
     if(isNaN(a) || isNaN(b)  || a<=0 || b<=0 || a=="" || b==""){
        alert('provide a number');
        return;
    }
   
    const area = mul(a,b);
    const name = 'parallelogram';

    serial+=1;
    displayData(serial,name,area);
})
document.getElementById('btn-calculate-rhombus').addEventListener('click',function(){
    const a = document.getElementById('input-d1').value;
    const b = document.getElementById('input-d2').value;
     // validation
     if(isNaN(a) || isNaN(b)  || a<=0 || b<=0 || a=="" || b==""){
        alert('provide a number');
        return;
    }
   
    const area = 0.5 * mul(a,b);
    const name = 'rhombus';

    serial+=1;
    displayData(serial,name,area);
})
document.getElementById('btn-calculate-pentagon').addEventListener('click',function(){
    const a = document.getElementById('input-penP').value;
    const b = document.getElementById('input-penB').value;
   
     // validation
     if(isNaN(a) || isNaN(b)  || a<=0 || b<=0 || a=="" || b==""){
        alert('provide a number');
        return;
    }
    const area = 0.5 * mul(a,b);
    const name = 'pentagon';

    serial+=1;
    displayData(serial,name,area);
})
document.getElementById('btn-calculate-ellips').addEventListener('click',function(){
    const a = document.getElementById('input-ea').value;
    const b = document.getElementById('input-eb').value;
     // validation
     if(isNaN(a) || isNaN(b)  || a<=0 || b<=0 || a=="" || b==""){
        alert('provide a number');
        return;
    }
   
    const area = 3.14 * mul(a,b);
    const name = 'ellips';

    serial+=1;
    displayData(serial,name,area);
})