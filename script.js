function locateUser() {
    const userSearchInput = document.getElementById("user_input").value;
    const api = `https://api.github.com/users/${userSearchInput}`

    fetch(api)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error Connecting to API");
            }
            // convert to JSON
            return response.json();
        })
        .then((data) => {
            const obj = JSON.parse(JSON.stringify(data));
            console.log(data);
            console.log(obj.name);

            // main section, drawing out specifics
            const username = document.getElementById("username");
            username.innerHTML = obj.login;
            const name = document.getElementById("name");
            name.innerHTML = obj.name;
            const image = document.getElementById("image");
            image.src = obj.avatar_url;
            image.classList.remove("d-none");
            const followers = document.getElementById("followers");
            followers.innerHTML = obj.followers
            const following = document.getElementById("following");
            following.innerHTML = obj.following;
            const bio = document.getElementById("bio");
            bio.innerHTML = obj.bio
            const repositoriesPublic = document.getElementById("repositories_public");
            repositoriesPublic.innerHTML = obj.public_repos;
        });
}

