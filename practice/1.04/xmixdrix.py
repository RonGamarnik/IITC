import time
namePl1 = input("Please enter player 1 name: ")
namePl2 = input("Please enter player 2 name: ")
template = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"] ]
options = {
    "1": (0, 0),
    "2": (0, 1),
    "3": (0, 2),
    "4": (1, 0),
    "5": (1, 1),
    "6": (1, 2),
    "7": (2, 0),
    "8": (2, 1),
    "9": (2, 2),
}
scoreBoard = {
    namePl1 : 0,
    namePl2 : 0,
    "draw" : 0
}
def reset ():
    global template, counter
    restart = input("Would you like to start anoter game?")
    if restart == "yes":
         template = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]]
         counter = 0
    elif restart=="no":
        exit()
    else:
        print("invalid input!")
        reset()


def printTemplate(template):
    for i, row in enumerate(template):
        if i > 0:
            print("-" * 9)
        for j, cell in enumerate(row):
            if j > 0:
                print("|", end=" ")
            print(cell if cell else " ", end=" ")
        print()


def checkWinner(template):
    for i in range(3):
        if template[i][0] == template[i][1] == template[i][2] and template[i][0] != "":
            return template[i][0]
        elif (
            template[0][i] == template[1][i] == template[2][i] and template[0][i] != ""
        ):
            return template[0][i]
    if template[0][0] == template[1][1] == template[2][2] and template[0][0] != "":
        return template[0][0]
    elif template[0][2] == template[1][1] == template[2][0] and template[0][2] != "":
        return template[0][2]
    else:
        return None


def playerx():
    choiceX = input(f"{namePl1} please enter a number in range 1-9: ")
    for k,v in options.items():
        if choiceX == k:
            if template[v[0]][v[1]] == "1" or "2" or "3" or "4" or "5" or"6" or "7" or "8" or "9":
                template[v[0]][v[1]] = "\033[1;32;40m X"
                return
def playerO():
    choiceO = input(f"{namePl2} please enter a number in range 1-9: ")
    for k,v in options.items():
        if choiceO == k:
            if template[v[0]][v[1]] == "1" or "2" or "3" or "4" or "5" or"6" or "7" or "8" or "9":
                template[v[0]][v[1]] = "\033[1;34;40m O"
                return
def gamePlay ():
    while True:
        start = time.perf_counter()
        global template
        while not checkWinner(template) or counter < 9 :
            counter = 0
            playerx()
            counter +=1
            print(printTemplate(template))
            if checkWinner(template):
                print(f"{namePl1} has won!!!!")
                scoreBoard[namePl1] +=1
                end = time.perf_counter()
                print("The game took",end - start, "seconds")
                print(scoreBoard)
                reset()
            else:
                playerO()
                counter +=1
                print(printTemplate(template))
                if checkWinner(template):
                    print(f"{namePl2} has won")
                    scoreBoard[namePl2] +=1
                    end = time.perf_counter()
                    print("The game took",end - start, "seconds")

                    print(scoreBoard)
                    reset()
                
        if counter > 9 and not checkWinner(template):
            print("its a draw")
            scoreBoard["draw"] +=1
            end = time.perf_counter()
            print("The game took",end - start, "seconds")

            print(scoreBoard)
            reset()

gamePlay()
