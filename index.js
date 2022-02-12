console.log("This is drag and drop any object assignment...!")


let box = document.getElementsByClassName('blockBox');
let imgBox = document.querySelector('.imgBox');


imgBox.addEventListener('dragstart', (e) => {
    console.log('pick');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';

    }, 0);
})

imgBox.addEventListener('dragend', (e) => {
    console.log('drop');
    e.target.className = 'imgBox';

})

for (blocksBox of box) {
    blocksBox.addEventListener('dragover', (e) => {
        e.preventDefault();

    })
    blocksBox.addEventListener('dragenter', (e) => {
        e.target.className += ' dashed';

    })
    blocksBox.addEventListener('dragleave', (e) => {
        e.target.className = 'blockBox';



    })
    blocksBox.addEventListener('drop', (e) => {
        e.target.append(imgBox)

    })

}