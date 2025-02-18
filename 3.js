console.log("introduce tu edad: ");
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    if (parseInt(data.toString(), 10) >= 18) {
        console.log("mayor de edad");
    }
    else {
        console.log("menor de edad");
    }
    process.exit();
})
