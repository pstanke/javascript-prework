{
    function playGame(playerInput) {
        clearMessages();

        function getMoveName(argMoveId) {
            if (argMoveId == 1) {
                return "kamień";
            } else if (argMoveId == 2) {
                return "papier";
            } else if (argMoveId == 3) {
                return "nożyce";
            } else {
                return "nieznany ruch";
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1),
            computerMove = getMoveName(randomNumber),
            playerMove = getMoveName(playerInput);

        console.log("Wylosowana liczba to: " + randomNumber);
        console.log("Gracz wpisał: " + playerInput);

        printMessage("Mój ruch to: " + computerMove);
        printMessage("Twój ruch to: " + playerMove);

        function getResult(argComputerMove, argPlayerMove) {
            const result = document.getElementById("result");

            if (
                (argComputerMove == "kamień" && argPlayerMove == "papier") ||
                (argComputerMove == "papier" && argPlayerMove == "nożyce") ||
                (argComputerMove == "nożyce" && argPlayerMove == "kamień")
            ) {
                playWins++;
                result.classList.remove("lose");
                result.classList.add("win");
                result.classList.remove("draft");
            } else if (
                (argComputerMove == "kamień" && argPlayerMove == "nożyce") ||
                (argComputerMove == "papier" && argPlayerMove == "kamień") ||
                (argComputerMove == "nożyce" && argPlayerMove == "papier")
            ) {
                comWins++;
                result.classList.remove("win");
                result.classList.add("lose");
                result.classList.remove("draft");
            } else if (argComputerMove == argPlayerMove) {
                result.classList.remove("lose");
                result.classList.remove("win");
                result.classList.add("draft");
                draft++;
            } else {
            }
            result.innerHTML = `${playWins} : ${draft} : ${comWins}`;
        }
        getResult(computerMove, playerMove);
    }
    let comWins = 0,
        playWins = 0,
        draft = 0;
    const result = document.getElementById("result");
    result.innerHTML = `${playWins} : ${draft} : ${comWins}`;

    document.getElementById("play_rock").addEventListener("click", function () {
        playGame(1);
    });
    document
        .getElementById("play_paper")
        .addEventListener("click", function () {
            playGame(2);
        });
    document
        .getElementById("play_scissors")
        .addEventListener("click", function () {
            playGame(3);
        });
}
