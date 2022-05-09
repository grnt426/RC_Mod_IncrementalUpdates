class IncrementalUpdate {
    constructor() {
        this.hello = 1;
        this.URL = "http://localhost:8080";
    }

    update(data) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.URL + "/incr_update");
        xhr.timeout = 2000;
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(
            JSON.stringify(
            {
                    "type": "incr_update",
                    "data": data,
                    "instance": window.gamestate.game.auth.instance
                }
            )
        );
    }
}

window.granite.addHookListener(new IncrementalUpdate());