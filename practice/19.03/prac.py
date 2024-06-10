watched_movies = {"matrix": 9.0, "Thor love and thunder": 8.3, "green book": 8.3, "her": 8.1,
"the evil dead": 7.8, "forrest gump": 9.2, "life aquatic": 9.5, "life of bryan": 7.9, "first blood": 8.9}

while True:
    name = input("Please enter your name (or 'q' to quit): ")
    if name.lower() == 'q':
        break
    
    while True:
        movie = input("Enter a movie you've recently watched, 'cu' to change user, or 'q' to quit: ")
        if movie.lower() == 'q'or movie.lower() =='Q':
            break
        elif movie.lower() == 'cu':
            break
        
        if movie in watched_movies:
            print(f"I've watched that movie as well! I rate it {watched_movies[movie]}")
        else:
            rating = input("You're the first one to watch this! What's your rating? ")
            #watched_movies[movie] = rating
    
    if movie.lower() == 'q':
        break
