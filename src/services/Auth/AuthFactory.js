import EmailAuthenticator from "./EmailAuthenticator";
import JsonUserProvider from "./JsonUserProvider";

class AuthFactory {
    static create() {
        return new EmailAuthenticator(new JsonUserProvider());
    }
}

export default AuthFactory;
