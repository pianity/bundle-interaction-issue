export async function handle(state, action) {
    if (action.type === "ping") {
        if (state.ping) {
            throw new Error("You need to pong first");
        }

        state.ping = true;
    }

    if (action.type === "pong") {
        if (!state.ping) {
            throw new Error("You need to ping first");
        }

        state.ping = false;
    }

    return { state };
}
