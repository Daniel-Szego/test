class ArrayUserProvider {
    users = [];

    constructor() {
        this.users = [
            {
                id: 1,
                email: 'investor@galaxis.com',
                password: 'investor',
                role: 'investor'
            },
            {
                id: 2,
                email: 'trader@galaxis.com',
                password: 'trader',
                role: 'trader'
            },
        ];
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

export default ArrayUserProvider;
