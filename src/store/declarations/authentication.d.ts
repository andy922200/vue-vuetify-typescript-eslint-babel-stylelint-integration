// Declare interface, type, ...etc, which are related to the module.
export namespace AuthenticationModule{
    type State = {
        user: User | undefined;
    }

    interface User{
        id: string | number;
        name: string;
    }
}
