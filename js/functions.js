const brandIdentity = document.getElementById("brandIdentity");
const brandIdentityButton = document.getElementById("brandIdentityButton");

const goals = document.getElementById("goals");
const goalsButton = document.getElementById("goalsButton");

const vision = document.getElementById("vision");
const visionButton = document.getElementById("visionButton");

const work = document.getElementById("work");
const workButton = document.getElementById("workButton");


brandIdentityButton.addEventListener('click',(e) => {
    e.preventDefault();
    const newData ={
        body:brandIdentity.value    
    };
    const updates={};
    updates['/content/index/brandIdentity'] = newData;
    database.ref().update(updates);
});


goalsButton.addEventListener('click',(e) => {
    e.preventDefault();
    const newData ={
        body:goals.value    
    };
    const updates={};
    updates['/content/index/goals'] = newData;
    database.ref().update(updates);
});

visionButton.addEventListener('click',(e) => {
    e.preventDefault();
    const newData ={
        body:vision.value    
    };
    const updates={};
    updates['/content/index/vision'] = newData;
    database.ref().update(updates);
});


workButton.addEventListener('click',(e) => {
    e.preventDefault();
    const newData ={
        body:work.value    
    };
    const updates={};
    updates['/content/index/work'] = newData;
    database.ref().update(updates);
});
 

//add new
//addButton.addEventListener('click',(e) => {
//  e.preventDefault();
//  database.ref('content/somevalue').set({
//      key:value,
//      key:value    
//  });
//});


