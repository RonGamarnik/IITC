import requests

score_board = 0
counter = 0


def ask_question(question, options, answer):
    global score_board
    global counter

    print(question)
    for i, option in enumerate(options, start=1):
        print(f"{i}. {option}")

    counter += 1
    user_answer = input("Please enter your answer: ")
    if user_answer.lower() == answer.lower():
        score_board += 1
        return "Correct answer!!!"
    else:
        return "Wrong answer!!!"


def fetch_questions():
    try:
        response = requests.get(
            "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple"
        )
        response.raise_for_status()  # Raise an exception for bad responses
        data = response.json()
        questions = data.get("results")
        return questions
    except requests.RequestException as e:
        return f"Error fetching questions: {e}"


def quiz(category):
    global score_board
    global counter

    def quiz_question(question): 
        return ask_question(
            question["question"],
            question["incorrect_answers"] + [question["correct_answer"]],
            question["correct_answer"],
        )

    questions = fetch_questions()
    responses = [quiz_question(question) for question in questions]

    return responses


def start_quiz():
    print(
        """Please choose the subject of the quiz:
             1. Geography
             2. Math
             3. English"""
    )
    category = input("Enter your choice (1/2/3): ")
    if category not in ["1", "2", "3"]:
        print("Invalid choice!")
        return

    if category == "1":
        quiz("Geography")
    elif category == "2":
        quiz("Math")
    elif category == "3":
        quiz("English")
    elif category == "4":
        if __name__ == "__main__":
            start_quiz()


    score_message = f"You answered {score_board} out of {counter}"
    print(score_message)


if __name__ == "__main__":
    start_quiz()
