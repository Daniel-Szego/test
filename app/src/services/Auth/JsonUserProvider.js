import availableUsers from '../../data/users';

class JsonUserProvider {
    users = [];

    constructor() {
        this.users = availableUsers;
    }

    /**
     * @param {string} email
     * @param {string} password
     *
     * @returns {null}
     */
    getByCredentials(email, password) {
        const user = this.users.find((user) => (user.email === email && user.password === password));

        return (user)
            ? user
            : null;
    }
}

export default JsonUserProvider;
