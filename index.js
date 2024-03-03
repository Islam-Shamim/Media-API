function loadPost(){
    fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    .then(res => res.json())
    .then(data => displayPost(data.posts))
}
function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        //console.log(post)
        postDiv.classList = `card bg-gray-100 m-4 p-4`;
        postDiv.innerHTML = `
        <div class="flex" onclick="addToTitleArea()">
            <div>
                <img class="w-[72px] h-[72] rounded-lg mr-4" src=${post.image}/>
            </div>
            <div>
                <p>#${post.category}<span class="ml-4">Author: ${post.author.name}</span></p>
                <h2 class="${post.category} font-bold text-xl my-2">${post.title}</h2>
                <p>${post.description}</p>
                <div>
                <i class="fa-regular fa-message mx-2"></i> ${post.comment_count} <i class="fa-regular fa-eye mx-2"></i> ${post.view_count} <i class="fa-regular fa-clock mx-2"></i> ${post.posted_time}
                </div>
            </div>
        </div>
        `;
        postContainer.appendChild(postDiv);
    }
}
loadPost();

//eventhandeler
function addToTitleArea(){
    //parent
    const calculationEntry = document.getElementById('title-card');

    //create child
    const p = document.createElement('p');
    p.classList.add('mt-2');
    p.innerHTML = `Clicked`;
    //append child with parent
    calculationEntry.appendChild(p);
}