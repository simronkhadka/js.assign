// You will create a function that simulates fetching user data from two different sources. The function should combine the results and return a single object with all the user information. You will use Promises to handle the asynchronous operations.
    
//     Instructions
    
//     1. **Create two mock data fetching functions:**
//         - `fetchUserProfile(userId)`: This function simulates fetching a user profile.
//         - `fetchUserPosts(userId)`: This function simulates fetching user posts.
//     2. **Create a function `getUserData(userId)` that:**
//         - Fetches the user profile and user posts using the above mock data fetching functions.
//         - Combines the results into a single object.
//         - Returns a Promise that resolves with the combined user data.
//     3. **Handle errors gracefully.**


function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            const userProfile = {
                userId: userId,
                name: 'Simron khadka',
                email: 'khadkasimron84@gmail.com',
                age: 19,
            };
            resolve(userProfile); 
        }, 1000); 
    });
}


function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            const userPosts = [
                { id: 1, userId: userId, title: 'Post 1', body: 'This is the first post' },
                
            
            ];
            resolve(userPosts); 
        }, 1500); 
    });
}

async function fetchUserData(userId) {
    try {
        const [userProfile, userPosts] = await Promise.all([
            fetchUserProfile(userId),
            fetchUserPosts(userId)
        ]);

        const userData = {
            profile: userProfile,
            posts: userPosts
        };

        return userData; 
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

const userId = '204';
fetchUserData(userId)
    .then(userData => {
        console.log('Combined user data:', userData);
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });