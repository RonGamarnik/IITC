
print("Welcome to the Event Organizer App!")

eventim = {}  # Dictionary to hold all events

while True:
    eventDecision = input("""Please choose a number for action:
                      1. add event
                      2. edit event
                      3. quit from the app
                      Your decision: """)

    if eventDecision == "1":
        day = input("Please enter the day today (DD): ")
        month = input("Please enter the current month (MM): ")
        year = input("Please enter the current year (YYYY): ")
        hour = input("Please enter the current hour (HH): ")
        minute = input("Please enter the current minute (MM): ")
        date = (day, month, year, hour, minute)
        eventName = input("Please enter the name of the event: ")
        location = input("Please enter the event location: ")
        eventKind = input("Please enter the event type: ")
        inviteList = []

        schedulingDict = {
            date: eventName
        }

        eventType = {
            eventName: eventKind
        }

        eventType[eventName] = eventKind

        if date in schedulingDict:
            print(f"The {date} is already taken.")
        else:
            print(f"The {eventName} event will occur at {day}-{month}-{year} {hour}:{minute} in {location}")
            schedulingDict[date] = eventName

        while True:
            listManipulation = input("""Please choose a number for action:
                    1. add someone to the list
                    2. remove someone from the list
                    3. search for someone in the list
                    4. finish adding attendees
                    Your decision: """)
            if listManipulation == "1":
                if len(inviteList) <= 50:
                    addName = input("Please enter the name of the attendee: ")
                    inviteList.append(addName)
                    continue
                else:
                    print("The event list is full, try again next time.")
                    continue
            elif listManipulation == "2":
                removeName = input("Please enter the name you would like to remove from the list: ")
                if removeName in inviteList:
                    inviteList.remove(removeName)
                    print(f"{removeName} has been removed from the list")
                else:
                    print(f"The {removeName} is not in the list.")
                continue
            elif listManipulation == "3":
                searchName = input("Please enter the name you would like to find: ")
                if searchName in inviteList:
                    print(f"{searchName} is on the list.")
                else:
                    print(f"The {searchName} is not in the list.")
                continue
            elif listManipulation == "4":
                print("Finished adding attendees.")
                break

        eventim[eventName] = {
            "date": date,
            "location": location,
            "Event kind": eventKind,
            "Invitation list": inviteList
        }

    elif eventDecision == "2":
        eventEditDecision = input("Please enter the name of the event you would like to edit: ")
        if eventEditDecision in eventim:
            evenentname = eventEditDecision
            for evenentname in eventim:
                editDecision = input("""Please choose what you would like to edit by a number from the menu:
                                                1. Edit the event location
                                                2. Edit the event date
                                                3. Edit the event name
                                                Your decision: """)
                if editDecision == "1":
                    newLocation = input("Please enter the new event location: ")
                    eventim[eventName]["location"] = newLocation
                elif editDecision == "2":
                    newDay = input("Please enter the new event day: ")
                    # eventim[eventName]["day"] = newDay
                    newMonth = input("Please enter the new event month: ")
                    # eventim[eventName]["month"] = newMonth
                    newYear = input("Please enter the new event year: ")
                    eventim[eventName]["year"] = newYear
                    eventim[eventName]["date"] = newDay, newMonth, newYear,hour,minute
                elif editDecision == "3":
                    newName = input("Please enter the new event name: ")
                    eventim[newName] = eventim.pop(eventName)
                    eventim[newName]["name"] = newName
                    break
    elif eventDecision == "3":
        print("Exiting the app.")
        break
sortedEventim = dict(sorted(eventim.items(), key=lambda item: item[1]["date"]))
print(sortedEventim)

