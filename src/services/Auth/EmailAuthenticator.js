class EmailAuthenticator {

    userProvider = {};

    constructor(userProvider) {
        this.userProvider = userProvider;
    }

    /**
     * Logs in the user by the given credentials.
     *
     * @param email
     * @param password
     *
     * @returns {*}
     */
    async login(email, password) {
        await new Promise(resolve => setTimeout(resolve, 1000));

        let user = this.userProvider.getByCredentials(email, password);

        if (!user) {
            throw 'Invalid Credentials!'
        }

        window.user = user;
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    /**
     * Log out the user.
     */
    logout() {
        window.user = null;
        sessionStorage.removeItem('user');
    }

    /**
     * Returns the logged in user.
     *
     * @returns {*|null}
     */
    user() {
        let user = JSON.parse(sessionStorage.getItem('user'));

        return user
            ? user
            : null;

        // return window.user
        //     ? window.user
        //     : null;
    }

    /**
     * Determines the user is logged in.
     *
     * @returns {boolean}
     */
    check() {
        console.log(!!this.user());

        return !!this.user();
    }
}

export default EmailAuthenticator;
