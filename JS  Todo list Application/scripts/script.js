
const elm = document.getElementById('submit-button');
const textItem = document.getElementById('item-text');
const countlist = document.getElementById('count_list');
const inputGroup = document.querySelector('.input_group');
const items = [];
// let checked = false;
const taskButton = document.querySelector('.task_button');

taskButton.addEventListener('click',()=>{
    setTimeout(() => {
        inputGroup.style.display='block';
        inputGroup.style.textAlign="center";
    }, 200);
    
});

elm.addEventListener('click',()=>{

    let textElementInput = document.getElementById('item');

    if (textElementInput.value!=""){
        //create li element
        var node = document.createElement('li');
    
        //create text node
        var textNode = document.createTextNode(textElementInput.value);
        //add text to node or li
        node.appendChild(textNode);    
        //node list
        var nodeList = document.getElementById('node_list');
        //add li to list

        var checkbox = document.createElement('input');
        checkbox.type='checkbox';
        checkbox.name='checkbox';
        checkbox.id='checkbox';
        checkbox.style.float ="right";

        // styling list item
        setTimeout(() => {
            nodeList.appendChild(node);
            node.style.listStyleType='none';
            node.style.position='relative';
            node.style.right='20px';
            node.style.marginTop='5px';
            node.style.fontFamily="Poppins, sans-serif";
            node.style.textTransform="capitalize";
            node.style.color="#fff";
            node.style.padding="5px";
            node.style.transitionDuration="3s"
        }, 150);
        
        

        //adding text node to list to track length of task
        items.push(textNode);
        node.appendChild(checkbox);

        //if new item is added to the list
        if(items.length>0){
            countlist.style.display='block';
            countlist.innerText = "Tasks"+": "+items.length;
        }
        
        textElementInput.value= "";
        inputGroup.style.display='none';


        checkbox.addEventListener('click',()=>{
            setTimeout(() => {
                node.style.display='none';
                items.pop()
                countlist.innerText = "Tasks"+": "+items.length

                //if no task remains then vanish task counts
                if (items.length==0){
                    countlist.style.display='none';
                }
            }, 200);
            
            
        });

    }

    
    
    
})




