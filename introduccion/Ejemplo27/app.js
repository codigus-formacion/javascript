function tryError(error) {
    try {
        if (error) {
            throw "An error";
        }
        return true;

    } catch (e) {

        console.error(e);
        return false;

    } finally {
        //do cleanup
    }
}

tryError(true);