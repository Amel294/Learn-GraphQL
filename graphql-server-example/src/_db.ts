let games = [
    { id: "1", title: "The Last of Us Part II", platform: ["PlayStation 4", "PlayStation 5"] },
    { id: "2", title: "Cyberpunk 2077", platform: ["PC", "PlayStation 4", "Xbox One", "PlayStation 5"] },
    { id: "3", title: "Halo Infinite", platform: ["Xbox One", "Xbox Series X/S"] },
    { id: "4", title: "Minecraft", platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"] },
    { id: "5", title: "The Witcher 3: Wild Hunt", platform: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"] },
];

let reviews = [
    { id: "1", rating: 9, content: "Amazing gameplay and story, a masterpiece!", game_id: "1", author_id: "1" },
    { id: "2", rating: 7, content: "Great visuals, but the story could be improved.", game_id: "2", author_id: "2" },
    { id: "3", rating: 8, content: "The combat is solid, but the pacing is slow.", game_id: "3", author_id: "3" },
    { id: "4", rating: 10, content: "The best RPG I’ve played in years, truly immersive.", game_id: "5", author_id: "4" },
    { id: "5", rating: 6, content: "Good game, but a bit buggy on launch.", game_id: "2", author_id: "5" },
];

let authors = [
    { id: "1", name: "Neil Druckmann", verified: true },
    { id: "2", name: "Hideo Kojima", verified: true },
    { id: "3", name: "Todd Howard", verified: true },
    { id: "4", name: "Yoko Taro", verified: true },
    { id: "5", name: "Gabe Newell", verified: true },
];

export default { games, reviews, authors };
