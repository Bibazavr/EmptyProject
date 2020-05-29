interface SharedPreferences {
    getString: (key: string,
                defaultValue: any,
                successCallback: (response: string) => void,
                errorCallback: (response: string) => void) => void;
    putString: (key: string, value: string,
                successCallback: (response: string) => void,
                errorCallback: (response: string) => void) => void;

    putBoolean: (key: string, value: boolean,
                 successCallback: (response: string) => void,
                 errorCallback: (response: string) => void) => void;

    getBoolean: (key: string, defaultValue: boolean,
                 successCallback: (response: boolean) => void,
                 errorCallback: (response: string) => void) => void;

    get<T>(name: string, success: (value: T) => void, error: (error: Error) => void): void;

    put<T>(name: string, value: T, success: () => void, error: (error: Error) => void): void;
}


interface AutoStartInterface {
    enable(): never;

    enableService(id: string): never;

    disable(): never;
}

interface CordovaPlugins {
    autoStart: AutoStartInterface
}

interface CordovaWindowPlugins {
    SharedPreferences: {
        getInstance: (name: string) => SharedPreferences
    }
}

interface Window {
    plugins: CordovaWindowPlugins;
}


declare var cordova: {
    plugins: CordovaPlugins;
};
