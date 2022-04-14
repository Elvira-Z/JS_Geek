const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);

post.comments.forEach(element => {
    if (element.rating.dislikes === 2)
        console.log(element.rating.dislikes);
});

post.comments.forEach(element => {
    if (element.userId === 5)
        console.log(element.userId);
});

post.comments.forEach(element => {
    if (element.text === 'lorem ipsum 2')
        console.log(element.text);
});

