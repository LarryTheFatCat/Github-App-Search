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
            const username = document.getElementById("username");
            const name = document.getElementById("name");
            const image = document.getElementById("image");
            const followers = document.getElementById("followers");
            const following = document.getElementById("following");
            const bio = document.getElementById("bio");
            const repositoriesPublic = document.getElementById("repositories_public");

            // main section, drawing out specifics
            // After parsing on our json, we can set indivudal items due to
            // our api response being an object thus allowing us to call
            // multiple items, just think of it has referencing a dictionary
            // in python lol
            username.innerHTML = obj.login;
            name.innerHTML = obj.name;
            image.src = obj.avatar_url;
            image.classList.remove("d-none");
            followers.innerHTML = obj.followers
            following.innerHTML = obj.following;
            bio.innerHTML = obj.bio
            repositoriesPublic.innerHTML = obj.public_repos;
        });
}

