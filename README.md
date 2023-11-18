# Mohitul Islam Frontend

## Notes

    for/in - loops through the properties of an object.
    for/of - loops through the values of an iterable object.

## Example

    for/of:
        let text = [
            "GeeksforGeeks",
            " A Computer Science Portal for Geeks ",
            "43"
        ];
        let userId = "";
        for (let i of text) {
            userId += i;
        }
        document.getElementById("demo").innerHTML = userId;

    for/in:
        let person = {
            firstName: "GeeksforGeeks",
            lastName: "<br>A Computer Science Portal for Geeks ",
            rank: 43
        };
        let userId = "";
        for (let i in person) {
            userId += person[i];
        }
        document.getElementById("demo").innerHTML = userId;
